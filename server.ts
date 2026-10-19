import express from 'express';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

  app.use(express.json());

  // API Route: AI Etiquette Consultation
  app.post('/api/consult-etiquette', async (req, res) => {
    try {
      const { scenario, location, context } = req.body;
      if (!scenario || typeof scenario !== 'string' || !scenario.trim()) {
        return res.status(400).json({ error: 'Vui lòng cung cấp tình huống cần tư vấn.' });
      }

      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        // High quality offline fallback with realistic civic guidelines
        return res.json({
          status: 'success',
          isOfflineGuidance: true,
          analysis: 'Tình huống này yêu cầu sự bình tĩnh, tế nhị và xử lý trên tinh thần thiện chí giữ gìn không gian chung.',
          dos: [
            'Chủ động mỉm cười nhẹ nhàng, hạ giọng nói ôn hòa khi trao đổi',
            'Nhờ sự can thiệp của nhân viên quản lý/bảo vệ nếu đối phương phản ứng gay gắt',
            'Lấy quy định chung của không gian làm cơ sở trao đổi thay vì chỉ trích cá nhân'
          ],
          donts: [
            'Tuyệt đối không to tiếng quát tháo làm leo thang căng thẳng',
            'Không tự ý quay phim bêu riếu hình ảnh người khác lên mạng xã hội',
            'Không dùng cử chỉ đe dọa hoặc đụng chạm thể xác'
          ],
          suggestedPhrases: [
            '"Dạ em xin lỗi làm phiền anh/chị một chút, anh/chị có thể vui lòng hỗ trợ điều chỉnh giúp em được không ạ?"',
            '"Xin phép mọi người cùng giữ gìn trật tự và vệ sinh chung để ai cũng cảm thấy thoải mái nhé ạ."'
          ],
          legalOrCivicNote: 'Bộ quy tắc ứng xử văn minh nơi công cộng khuyến khích giải quyết xung đột bằng sự thấu hiểu và đối thoại nhã nhặn.'
        });
      }

      const ai = new GoogleGenAI({ apiKey });
      const prompt = `Bạn là chuyên gia tư vấn văn hóa ứng xử nơi công cộng tại Việt Nam (thuộc Đề án Cẩm nang Ứng xử Nơi công cộng G01).
Người dùng đang gặp một tình huống thực tế hoặc băn khoăn về cách ứng xử văn minh:
- Không gian/Địa điểm: ${location || 'Nơi công cộng'}
- Tình huống: "${scenario}"
${context ? `- Bối cảnh bổ sung: ${context}` : ''}

Hãy đưa ra lời tư vấn cụ thể, tế nhị, nhân văn, thực tế và thượng tôn pháp luật theo định dạng JSON chuẩn với các trường sau:
{
  "analysis": "Đánh giá ngắn gọn 1-2 câu về tâm lý các bên và tính chất tình huống",
  "dos": ["Hành vi nên làm 1", "Hành vi nên làm 2", "Hành vi nên làm 3"],
  "donts": ["Hành vi tuyệt đối không nên làm 1", "Hành vi không nên làm 2", "Hành vi không nên làm 3"],
  "suggestedPhrases": ["Câu nói mẫu lịch sự 1 mà người dùng có thể áp dụng trực tiếp", "Câu nói mẫu lịch sự 2"],
  "legalOrCivicNote": "Ghi chú về văn hóa ứng xử đô thị hoặc điều luật/nghị định xử phạt hành chính nếu vi phạm pháp luật Việt Nam"
}
Lưu ý: Chỉ trả về JSON thuần túy, không có thẻ markdown \`\`\`json.`;

      const response = await ai.models.generateContent({
        model: 'gemini-3.8-flash',
        contents: prompt,
        config: {
          responseMimeType: 'application/json',
        }
      });

      const responseText = response.text?.trim() || '{}';
      try {
        const parsed = JSON.parse(responseText);
        return res.json({ status: 'success', ...parsed });
      } catch {
        return res.json({
          status: 'success',
          analysis: responseText,
          dos: ['Giữ bình tĩnh và trao đổi nhã nhặn', 'Thông báo cho ban quản lý/nhân viên'],
          donts: ['Không nổi nóng gây gổ', 'Không dùng từ ngữ xúc phạm'],
          suggestedPhrases: ['"Xin lỗi bạn, vui lòng giữ trật tự chung giúp nhé."'],
          legalOrCivicNote: 'Ứng xử có văn hóa là thước đo văn minh của mỗi công dân.'
        });
      }
    } catch (error: any) {
      console.error('Gemini advisory error:', error);
      return res.status(500).json({
        error: 'Có lỗi xảy ra khi xử lý tư vấn tình huống.',
        details: error?.message || 'Lỗi xử lý server'
      });
    }
  });

  const isProd = process.env.NODE_ENV === 'production';

  if (!isProd) {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server listening on http://0.0.0.0:${PORT}`);
  });
}

startServer();
