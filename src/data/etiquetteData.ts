import { CategoryInfo, EtiquetteItem, LegalRegulation } from '../types';

export const CATEGORIES: CategoryInfo[] = [
  {
    id: 'transit',
    name: 'Phương tiện công cộng',
    shortDesc: 'Xe buýt, tàu Metro, máy bay, bến xe & trạm dừng',
    iconName: 'Bus',
    accentColor: 'emerald'
  },
  {
    id: 'cinema_theater',
    name: 'Rạp phim & Nhà hát',
    shortDesc: 'Không gian nghệ thuật biểu diễn & rạp chiếu bóng',
    iconName: 'Film',
    accentColor: 'indigo'
  },
  {
    id: 'hospital',
    name: 'Bệnh viện & Phòng khám',
    shortDesc: 'Cơ sở y tế, phòng cấp cứu & khu vực khám bệnh',
    iconName: 'HeartPulse',
    accentColor: 'rose'
  },
  {
    id: 'elevator',
    name: 'Thang máy & Cầu thang cuốn',
    shortDesc: 'Di chuyển thẳng đứng và thang cuốn trung tâm thương mại',
    iconName: 'ArrowUpDown',
    accentColor: 'amber'
  },
  {
    id: 'street_park',
    name: 'Công viên & Đường phố',
    shortDesc: 'Vỉa hè, phố đi bộ, quảng trường & công viên cây xanh',
    iconName: 'Trees',
    accentColor: 'teal'
  },
  {
    id: 'dining',
    name: 'Nhà hàng & Quán cà phê',
    shortDesc: 'Không gian ăn uống, trà sữa & hàng quán công cộng',
    iconName: 'Coffee',
    accentColor: 'orange'
  },
  {
    id: 'library',
    name: 'Thư viện & Nơi học tập',
    shortDesc: 'Nhà sách, phòng đọc sách & không gian Co-working',
    iconName: 'BookOpen',
    accentColor: 'blue'
  },
  {
    id: 'heritage_sacred',
    name: 'Di tích & Nơi tôn nghiêm',
    shortDesc: 'Chùa chiền, đền thờ, nhà thờ & di tích lịch sử',
    iconName: 'Landmark',
    accentColor: 'violet'
  },
  {
    id: 'administrative',
    name: 'Cơ quan công quyền',
    shortDesc: 'Bộ phận một cửa, phòng giao dịch & ngân hàng',
    iconName: 'Building2',
    accentColor: 'slate'
  }
];

export const ETIQUETTE_ITEMS: EtiquetteItem[] = [
  // 1. PHƯƠNG TIỆN CÔNG CỘNG (TRANSIT)
  {
    id: 'tr-01',
    categoryId: 'transit',
    type: 'DO',
    title: 'Chủ động nhường ghế ưu tiên',
    summary: 'Nhường ghế màu vàng/ghế ưu tiên cho người cao tuổi, phụ nữ mang thai, trẻ em và người khuyết tật.',
    reason: 'Phương tiện rung lắc khi di chuyển có thể gây ngã nguy hiểm cho các nhóm đối tượng yếu thế thể chất.',
    practicalTip: 'Khi thấy người cần giúp đỡ bước lên xe, hãy đứng dậy nhẹ nhàng kèm cử chỉ mời mọc nhã nhặn: "Cháu mời bác ngồi đây ạ".',
    priority: 'mandatory',
    tags: ['Ưu tiên', 'Xe buýt', 'Metro', 'Lịch sự']
  },
  {
    id: 'tr-02',
    categoryId: 'transit',
    type: 'DO',
    title: 'Đeo tai nghe và vặn âm lượng vừa phải',
    summary: 'Luôn sử dụng tai nghe khi nghe nhạc, lướt video ngắn (TikTok, Reels) hoặc gọi điện thoại.',
    reason: 'Không gian xe buýt hay toa tàu là không gian kín; âm thanh loa ngoài là ô nhiễm tiếng ồn gây khó chịu cho mọi người.',
    practicalTip: 'Kiểm tra giắc cắm hoặc kết nối Bluetooth trước khi bật âm thanh để tránh bị phát nhầm loa ngoài.',
    priority: 'mandatory',
    tags: ['Tiếng ồn', 'Tai nghe', 'Ý thức']
  },
  {
    id: 'tr-03',
    categoryId: 'transit',
    type: 'DO',
    title: 'Tháo balo và xách tay khi xe đông',
    summary: 'Khi bước lên phương tiện đông đúc, hãy chuyển balo từ trên lưng xuống xách bằng tay hoặc đặt trước ngực.',
    reason: 'Balo đeo sau lưng chiếm thể tích lớn và vô tình thúc mạnh vào người phía sau mỗi khi bạn xoay người.',
    practicalTip: 'Nếu đeo balo phía trước, vừa kiểm soát được tư trang không bị móc trộm, vừa tránh va quẹt người khác.',
    priority: 'courtesy',
    tags: ['Balo', 'Hành lý', 'An toàn']
  },
  {
    id: 'tr-04',
    categoryId: 'transit',
    type: 'DONT',
    title: 'Nói chuyện điện thoại to tiếng hoặc bật loa ngoài',
    summary: 'Tuyệt đối không đàm thoại kéo dài, buôn chuyện riêng tư ầm ĩ hoặc cãi vã qua điện thoại trên xe.',
    reason: 'Bắt buộc hàng chục người xa lạ phải nghe chuyện đời tư của bạn là hành vi thiếu tôn trọng không gian riêng.',
    practicalTip: 'Nếu có cuộc gọi gấp, hãy hạ giọng nói: "Mình đang trên xe buýt, sẽ gọi lại cho bạn sau nhé".',
    priority: 'courtesy',
    tags: ['Điện thoại', 'Ô nhiễm tiếng ồn']
  },
  {
    id: 'tr-05',
    categoryId: 'transit',
    type: 'DONT',
    title: 'Ăn thực phẩm có mùi nồng hoặc xả rác trên xe',
    summary: 'Không mang theo và sử dụng đồ ăn nặng mùi như sầu riêng, mít, mắm tôm, bún đậu, đồ chiên dầu mỡ.',
    reason: 'Máy lạnh tuần hoàn kín sẽ lưu giữ mùi hôi nhiều giờ, gây say xe, buồn nôn cho hành khách đi cùng.',
    legalReference: 'Quy chế vận tải hành khách công cộng cấm mang hàng hóa có mùi hôi tanh lên phương tiện.',
    practicalTip: 'Nếu phải mang thực phẩm về nhà, hãy bọc kín trong nhiều lớp túi zip và thùng xốp dán kín băng keo.',
    priority: 'mandatory',
    tags: ['Mùi hôi', 'Ăn uống', 'Vệ sinh']
  },
  {
    id: 'tr-06',
    categoryId: 'transit',
    type: 'DONT',
    title: 'Gác chân lên ghế trước hoặc dạng chân quá rộng',
    summary: 'Không duỗi thẳng chân chắn lối đi, không gác chân lên lưng ghế phía trước hoặc chiếm diện tích 2 ghế.',
    reason: 'Gây bẩn vải bọc ghế, làm mất vệ sinh và thu hẹp không gian di chuyển tối thiểu của hành khách khác.',
    practicalTip: 'Giữ hai chân khép gọn trong phạm vi ghế ngồi của mình, đặt túi xách gọn ghẽ dưới sàn giữa hai bàn chân.',
    priority: 'recommended',
    tags: ['Tư thế', 'Văn minh ghế ngồi']
  },

  // 2. RẠP CHIẾU PHIM & NHÀ HÁT (CINEMA)
  {
    id: 'ci-01',
    categoryId: 'cinema_theater',
    type: 'DO',
    title: 'Chuyển điện thoại về chế độ rung hoặc im lặng',
    summary: 'Tắt chuông và tắt đèn flash thông báo ngay từ lúc bước vào phòng chiếu.',
    reason: 'Tiếng chuông bất ngờ phá vỡ hoàn toàn bầu không khí tập trung của tác phẩm điện ảnh hoặc vở kịch.',
    practicalTip: 'Bật chế độ "Không làm phiền" (Do Not Disturb) và giảm độ sáng màn hình điện thoại xuống mức tối thiểu.',
    priority: 'mandatory',
    tags: ['Rạp phim', 'Chuông điện thoại', 'Tập trung']
  },
  {
    id: 'ci-02',
    categoryId: 'cinema_theater',
    type: 'DO',
    title: 'Đến đúng giờ và cúi người khi cần đi qua hàng ghế',
    summary: 'Có mặt trước giờ chiếu 10-15 phút. Nếu vào muộn, hãy đi khẽ, hơi cúi người và nói lời xin lỗi.',
    reason: 'Đứng thẳng chắn ngang màn hình khiến những người ngồi sau bị che khuất tầm nhìn thưởng thức bộ phim.',
    practicalTip: 'Khi lách qua hàng ghế, hãy hướng mặt về phía màn hình hoặc quay mặt về phía người ngồi, nói: "Xin lỗi làm phiền ạ".',
    priority: 'courtesy',
    tags: ['Đúng giờ', 'Tầm nhìn']
  },
  {
    id: 'ci-03',
    categoryId: 'cinema_theater',
    type: 'DONT',
    title: 'Đạp vào lưng ghế hoặc rung chân liên tục',
    summary: 'Không tì chân, không đạp gót hoặc gác mũi giày lên thành lưng ghế của người ngồi hàng trước.',
    reason: 'Mỗi cú chạm truyền rung chấn thẳng vào cột sống và đầu của người ngồi phía trước, gây khó chịu tột độ.',
    practicalTip: 'Điều chỉnh tư thế ngồi ngả lưng thoải mái tự nhiên, đặt hai bàn chân vững vàng trên sàn phòng chiếu.',
    priority: 'mandatory',
    tags: ['Đạp ghế', 'Ý thức rạp phim']
  },
  {
    id: 'ci-04',
    categoryId: 'cinema_theater',
    type: 'DONT',
    title: 'Thuyết minh, bàn luận hoặc "spoil" nội dung phim',
    summary: 'Không đoán trước tình tiết thành tiếng, không giải thích nội dung ồn ào cho người đi cùng.',
    reason: 'Làm mất đi trải nghiệm hồi hộp, bất ngờ vốn là giá trị cốt lõi của việc mua vé xem phim rạp.',
    practicalTip: 'Hãy dành mọi cảm xúc và lời bình luận sâu sắc sau khi bộ phim kết thúc tại sảnh chờ hoặc quán nước.',
    priority: 'recommended',
    tags: ['Bình luận', 'Spoil phim']
  },
  {
    id: 'ci-05',
    categoryId: 'cinema_theater',
    type: 'DONT',
    title: 'Bật sáng màn hình điện thoại nhắn tin hay lướt mạng',
    summary: 'Ánh sáng xanh phát ra từ điện thoại trong phòng tối gây lóa mắt dữ dội cho toàn bộ những người ngồi sau.',
    reason: 'Tương phản ánh sáng trong rạp tối rất cao, một màn hình điện thoại sáng trưng sẽ hút toàn bộ sự chú ý khỏi màn chiếu.',
    practicalTip: 'Nếu có tin nhắn hoặc công việc khẩn cấp, hãy xin phép bước ra ngoài sảnh hành lang để xử lý.',
    priority: 'mandatory',
    tags: ['Ánh sáng điện thoại', 'Phòng chiếu']
  },

  // 3. BỆNH VIỆN & CƠ SỞ Y TẾ (HOSPITAL)
  {
    id: 'ho-01',
    categoryId: 'hospital',
    type: 'DO',
    title: 'Giữ im lặng tuyệt đối và đi nhẹ nói khẽ',
    summary: 'Hạn chế nói to, không đùa giỡn tại hành lang, phòng chờ khám và đặc biệt là khu vực buồng bệnh.',
    reason: 'Người bệnh cần sự yên tĩnh để nghỉ ngơi hồi phục, y bác sĩ cần tập trung cao độ để chẩn đoán chính xác.',
    practicalTip: 'Nói chuyện thì thầm vừa đủ hai người nghe; bước chân chậm rãi tránh tạo tiếng lẹp kẹp của đế giày.',
    priority: 'mandatory',
    tags: ['Yên tĩnh', 'Phục hồi sức khỏe']
  },
  {
    id: 'ho-02',
    categoryId: 'hospital',
    type: 'DO',
    title: 'Đeo khẩu trang y tế và sát khuẩn tay',
    summary: 'Luôn đeo khẩu trang đúng quy cách khi bước vào khuôn viên bệnh viện và sát khuẩn tay bằng dung dịch cồn.',
    reason: 'Bệnh viện là môi trường tập trung nhiều mầm bệnh lây truyền qua đường hô hấp và tiếp xúc bề mặt.',
    practicalTip: 'Rửa tay sát khuẩn trước khi vào thăm bệnh nhân và ngay sau khi rời khỏi cơ sở y tế để bảo vệ người thân.',
    priority: 'mandatory',
    tags: ['Khẩu trang', 'Phòng dịch', 'An toàn y tế']
  },
  {
    id: 'ho-03',
    categoryId: 'hospital',
    type: 'DO',
    title: 'Tuân thủ số thứ tự và nhường lối đi cấp cứu',
    summary: 'Kiên nhẫn chờ đến lượt theo bảng điện tử, luôn dạt sang hai bên khi có xe cáng cứu thương di chuyển.',
    reason: 'Mỗi giây trong cấp cứu là mạng sống con người; chen lấn làm tắc nghẽn quy trình phân luồng y tế.',
    practicalTip: 'Quan sát các vạch sơn chỉ dẫn màu đỏ trên sàn hành lang - đó thường là tuyến đường ưu tiên cấp cứu.',
    priority: 'mandatory',
    tags: ['Xếp hàng', 'Lối cấp cứu']
  },
  {
    id: 'ho-04',
    categoryId: 'hospital',
    type: 'DONT',
    title: 'Tụ tập đông người thăm bệnh hoặc ở lại quá giờ quy định',
    summary: 'Không kéo cả gia đình, nhóm bạn 5-10 người vào phòng bệnh cùng một lúc; rời buồng bệnh đúng giờ giới nghiêm.',
    reason: 'Làm ngột ngạt không khí phòng bệnh, tăng nguy cơ nhiễm khuẩn chéo và gây mệt mỏi cho các bệnh nhân cùng phòng.',
    practicalTip: 'Chia thành từng nhóm nhỏ 1-2 người vào thăm luân phiên trong khoảng thời gian ngắn 15-20 phút.',
    priority: 'recommended',
    tags: ['Thăm bệnh', 'Nhiễm khuẩn chéo']
  },
  {
    id: 'ho-05',
    categoryId: 'hospital',
    type: 'DONT',
    title: 'Quay phim, chụp ảnh y bác sĩ hoặc bệnh nhân khác',
    summary: 'Tuyệt đối không tự ý livestream, quay video quá trình cấp cứu hoặc chụp hình hồ sơ bệnh án của người khác.',
    reason: 'Xâm phạm nghiêm trọng quyền riêng tư của bệnh nhân và vi phạm quy chế bảo mật thông tin ngành y.',
    legalReference: 'Nghị định 117/2020/NĐ-CP và Luật Khám bệnh, chữa bệnh về bảo vệ bí mật thông tin bệnh án.',
    practicalTip: 'Tập trung lắng nghe lời dặn của bác sĩ; ghi chú vào sổ tay hoặc xin hướng dẫn bằng văn bản thay vì quay hình.',
    priority: 'mandatory',
    tags: ['Quyền riêng tư', 'Bảo mật hồ sơ']
  },

  // 4. THANG MÁY & CẦU THANG CUỐN (ELEVATOR)
  {
    id: 'el-01',
    categoryId: 'elevator',
    type: 'DO',
    title: 'Đứng nép bên phải trên cầu thang cuốn',
    summary: 'Khi đi thang cuốn, đứng yên ở nửa bên phải; chừa trống toàn bộ làn bên trái cho người có việc khẩn cấp bước lên.',
    reason: 'Đây là quy ước văn minh quốc tế giúp luồng giao thông bộ hành không bị ùn tắc.',
    practicalTip: 'Nhắc nhở nhẹ nhàng bạn bè hoặc con nhỏ đứng gọn gàng một hàng thẳng sát tay vịn bên phải.',
    priority: 'courtesy',
    tags: ['Thang cuốn', 'Đi bên phải', 'Lối đi khẩn']
  },
  {
    id: 'el-02',
    categoryId: 'elevator',
    type: 'DO',
    title: 'Chờ người bên trong bước ra hết mới bước vào thang máy',
    summary: 'Đứng chờ ở hai bên cửa thang máy, tuyệt đối không đứng chắn chính giữa trước cửa cabin.',
    reason: 'Quy luật "Ra trước - Vào sau" giúp giải phóng diện tích bên trong cabin trước khi đón luồng người mới.',
    practicalTip: 'Khi thang mở ra, lùi lại nửa bước để tạo khoảng không thoáng đãng cho người bên trong bước ra ngoài.',
    priority: 'mandatory',
    tags: ['Ra trước vào sau', 'Thang máy']
  },
  {
    id: 'el-03',
    categoryId: 'elevator',
    type: 'DO',
    title: 'Giúp giữ nút mở cửa cho người phía sau hoặc người mang vác nặng',
    summary: 'Nếu đứng gần bảng điều khiển thang máy, hãy bấm và giữ nút [ < > ] khi thấy có người đang tiến đến.',
    reason: 'Tránh cửa thang máy đóng kẹp bất ngờ gây thương tích hoặc làm rơi hành lý của người bước vào.',
    practicalTip: 'Khi thang đến tầng của người khác, chủ động hỏi: "Anh/chị ra tầng này đúng không ạ?" và nép mình nhường đường.',
    priority: 'recommended',
    tags: ['Nút mở cửa', 'Hỗ trợ']
  },
  {
    id: 'el-04',
    categoryId: 'elevator',
    type: 'DONT',
    title: 'Chen lấn xô đẩy khi thang máy báo quá tải',
    summary: 'Nếu chuông báo quá tải vang lên và bạn là người bước vào sau cùng, hãy vui vẻ chủ động bước ra ngoài.',
    reason: 'Cố tình nán lại làm thang máy không thể vận hành, gây mất thời gian của hàng chục người trong cabin.',
    practicalTip: 'Mỉm cười bước ra và đợi chuyến kế tiếp: "Dạ cháu vào sau cùng, cháu đợi chuyến sau ạ".',
    priority: 'mandatory',
    tags: ['Quá tải', 'Chủ động nhường']
  },
  {
    id: 'el-05',
    categoryId: 'elevator',
    type: 'DONT',
    title: 'Nói chuyện quá to hoặc đứng quay mặt sát vào người khác',
    summary: 'Không nói to, không đùa cợt ầm ĩ; giữ khoảng cách giao tiếp tối thiểu và hướng mắt nhìn về phía cửa thang.',
    reason: 'Thang máy là không gian cực kỳ chật hẹp, nhìn chằm chằm vào mặt người đối diện gây cảm giác bất an, ngột ngạt.',
    practicalTip: 'Hướng mắt lên bảng hiển thị số tầng hoặc nhìn thẳng phía trước để giữ sự thoải mái cho mọi người.',
    priority: 'courtesy',
    tags: ['Khoảng cách cá nhân', 'Không gian kín']
  },

  // 5. CÔNG VIÊN & ĐƯỜNG PHỐ (STREET & PARK)
  {
    id: 'sp-01',
    categoryId: 'street_park',
    type: 'DO',
    title: 'Bỏ rác đúng nơi quy định và mang rác về nếu không có thùng',
    summary: 'Vứt rác vào đúng thùng phân loại (rác tái chế / rác hữu cơ); nếu không có thùng rác, hãy cất vào túi mang theo.',
    reason: 'Rác thải vương vãi phá hủy cảnh quan môi trường, làm tắc cống thoát nước và gây ô nhiễm không khí.',
    legalReference: 'Nghị định 45/2022/NĐ-CP: Phạt tiền từ 100.000đ - 1.000.000đ với hành vi vứt rác, mẩu tàn thuốc lá bừa bãi.',
    practicalTip: 'Luôn mang theo một chiếc túi nilon nhỏ trong balo để gom rác cá nhân sau những buổi dã ngoại.',
    priority: 'mandatory',
    tags: ['Phân loại rác', 'Môi trường xanh', 'Không xả rác']
  },
  {
    id: 'sp-02',
    categoryId: 'street_park',
    type: 'DO',
    title: 'Dắt thú cưng có dây xích, rọ mõm và dọn sạch chất thải',
    summary: 'Luôn xích chó khi ra công viên, đeo rọ mõm cho chó lớn và mang theo túi/xẻng để thu dọn phân thú cưng ngay lập tức.',
    reason: 'Chó thả rông có thể cắn người đi dạo, đe dọa trẻ nhỏ; chất thải thú cưng gây ô nhiễm và mất vệ sinh công cộng.',
    legalReference: 'Nghị định 04/2020/NĐ-CP: Phạt tiền từ 1.000.000đ - 2.000.000đ đối với hành vi không rọ mõm hoặc không xích chó.',
    practicalTip: 'Tập thói quen buộc cuộn túi nilon phân hủy sinh học ngay trên dây dắt thú cưng để luôn sẵn sàng xử lý.',
    priority: 'mandatory',
    tags: ['Thú cưng', 'Rọ mõm', 'Dọn phân chó']
  },
  {
    id: 'sp-03',
    categoryId: 'street_park',
    type: 'DO',
    title: 'Nhường đường cho người đi bộ tại vạch kẻ sang đường',
    summary: 'Giảm tốc độ và dừng xe nhường đường an toàn khi thấy người đi bộ đang bước trên vạch kẻ sang đường.',
    reason: 'Người đi bộ là đối tượng dễ bị tổn thương nhất trong giao thông đô thị; tôn trọng vạch kẻ là thước đo văn minh.',
    legalReference: 'Nghị định 100/2019/NĐ-CP & Luật Giao thông đường bộ: Bắt buộc nhường đường cho người đi bộ qua đường.',
    practicalTip: 'Ra hiệu bằng tay nhẹ nhàng để người đi bộ biết bạn đã dừng hẳn và an tâm bước qua đường.',
    priority: 'mandatory',
    tags: ['Vạch sang đường', 'Nhường đường', 'An toàn giao thông']
  },
  {
    id: 'sp-04',
    categoryId: 'street_park',
    type: 'DONT',
    title: 'Hút thuốc lá nơi công cộng tập trung đông người',
    summary: 'Không hút thuốc tại bến xe, công viên khu vui chơi trẻ em, vỉa hè đông người và không vứt tàn thuốc chưa dập tắt.',
    reason: 'Khói thuốc thụ động gây hại phổi cho trẻ nhỏ và người xung quanh; tàn thuốc còn than hồng tiềm ẩn nguy cơ hỏa hoạn.',
    legalReference: 'Nghị định 117/2020/NĐ-CP: Phạt tiền từ 200.000đ - 500.000đ đối với hành vi hút thuốc lá tại nơi có biển cấm.',
    practicalTip: 'Chỉ hút thuốc tại các khu vực được quy hoạch riêng biệt (Smoking Area) có sẵn gạt tàn cát dập lửa.',
    priority: 'mandatory',
    tags: ['Hút thuốc lá', 'Tàn thuốc', 'Khói thuốc thụ động']
  },
  {
    id: 'sp-05',
    categoryId: 'street_park',
    type: 'DONT',
    title: 'Bẻ hoa, giẫm đạp lên thảm cỏ và viết vẽ bậy lên công trình',
    summary: 'Không trèo lên tượng đài, không ngắt hoa chụp ảnh, không dùng bút xóa/sơn khắc tên lên ghế đá, thân cây.',
    reason: 'Phá hoại cảnh quan thiên nhiên và tài sản công cộng được xây dựng bằng tiền thuế của toàn dân.',
    legalReference: 'Nghị định 144/2021/NĐ-CP: Phạt tiền từ 1.000.000đ - 2.000.000đ đối với hành vi viết vẽ bậy, làm hư hỏng tài sản công cộng.',
    practicalTip: 'Hãy dùng ống kính máy ảnh để lưu giữ vẻ đẹp của hoa cỏ thay vì ngắt mang về nhà.',
    priority: 'mandatory',
    tags: ['Bảo vệ cây xanh', 'Không vẽ bậy', 'Cảnh quan đô thị']
  },

  // 6. NHÀ HÀNG & QUÁN CÀ PHÊ (DINING)
  {
    id: 'di-01',
    categoryId: 'dining',
    type: 'DO',
    title: 'Giao tiếp lịch sự với nhân viên phục vụ',
    summary: 'Gọi phục vụ bằng ánh mắt, giơ tay ngang tầm mắt và nói lời "Cảm ơn" khi được bưng bê đồ ăn, thức uống.',
    reason: 'Mọi nghề nghiệp lao động đều bình đẳng và xứng đáng được tôn trọng; cách bạn đối xử với phục vụ phản ánh văn hóa cá nhân.',
    practicalTip: 'Tránh búng tay "chách chách" hoặc huýt sáo gọi người. Hãy nói: "Em ơi cho anh/chị xin thêm nước với nhé, cảm ơn em".',
    priority: 'courtesy',
    tags: ['Tôn trọng phục vụ', 'Cảm ơn']
  },
  {
    id: 'di-02',
    categoryId: 'dining',
    type: 'DO',
    title: 'Dọn dẹp khay cốc tại quầy tự phục vụ (Self-service)',
    summary: 'Tại các chuỗi thức ăn nhanh hoặc quán cà phê có quầy thu gom, hãy chủ động bưng khay rác và cốc về đúng vị trí.',
    reason: 'Giúp giải phóng bàn sạch sẽ ngay lập tức cho khách hàng đến sau và giữ vệ sinh không gian chung.',
    practicalTip: 'Đổ đá thừa vào bồn đổ nước, xếp ly giấy và giấy lau vào thùng rác hữu cơ, đặt khay nhựa lên trên cùng quầy kệ.',
    priority: 'recommended',
    tags: ['Tự phục vụ', 'Dọn khay', 'Văn minh ẩm thực']
  },
  {
    id: 'di-03',
    categoryId: 'dining',
    type: 'DONT',
    title: 'Bật loa ngoài xem video ngắn, livestream hoặc gọi video',
    summary: 'Không mở âm thanh game, clip mạng xã hội ở mức âm lượng lớn trong quán cà phê hay phòng ăn kín.',
    reason: 'Mỗi người tìm đến quán để trò chuyện, thư giãn hoặc làm việc; âm thanh hỗn loạn gây căng thẳng cho người xung quanh.',
    practicalTip: 'Hãy luôn mang tai nghe theo người, hoặc chuyển sang chế độ phụ đề nếu chỉ cần xem hình ảnh.',
    priority: 'mandatory',
    tags: ['Loa ngoài', 'Tiếng ồn quán cà phê']
  },
  {
    id: 'di-04',
    categoryId: 'dining',
    type: 'DONT',
    title: 'Để trẻ nhỏ chạy nhảy tự do, la hét làm phiền bàn khác',
    summary: 'Không để con trẻ chạy vòng quanh các lối đi hẹp giữa các bàn ăn mà không có sự trông nom của người lớn.',
    reason: 'Nhân viên bưng bê canh nóng, đồ nướng rất dễ va chạm gây bỏng nặng nguy hiểm cho trẻ; tiếng la hét làm phiền khách khác.',
    practicalTip: 'Chuẩn bị sẵn giấy vẽ màu hoặc đồ chơi tĩnh để trẻ ngồi ngoan tại bàn, nhắc nhở trẻ giữ trật tự trước khi vào quán.',
    priority: 'courtesy',
    tags: ['Trẻ em', 'An toàn bỏng', 'Quản lý con nhỏ']
  },

  // 7. THƯ VIỆN & KHÔNG GIAN HỌC TẬP (LIBRARY)
  {
    id: 'li-01',
    categoryId: 'library',
    type: 'DO',
    title: 'Giữ im lặng tuyệt đối và sử dụng tai nghe cách âm',
    summary: 'Nói chuyện thì thầm khi cần thiết; tắt rung bàn phím, tắt tiếng chuột click to hoặc tiếng thông báo máy tính.',
    reason: 'Thư viện là không gian đòi hỏi mức độ tập trung tư duy cao độ của hàng trăm độc giả và sinh viên.',
    practicalTip: 'Cài đặt chế độ Silent trên điện thoại và laptop; sử dụng loại chuột máy tính phím bấm tĩnh âm (Silent Click).',
    priority: 'mandatory',
    tags: ['Thư viện', 'Tập trung', 'Không gian yên tĩnh']
  },
  {
    id: 'li-02',
    categoryId: 'library',
    type: 'DO',
    title: 'Bảo quản sách sạch sẽ và đặt lại đúng vị trí quy định',
    summary: 'Giữ gìn trang sách phẳng phiu, không gấp mép (dog-ear), đặt sách vào xe đẩy trả sách sau khi đọc xong.',
    reason: 'Một cuốn sách trong thư viện sẽ phục vụ hàng nghìn người đọc qua nhiều năm; đặt sai vị trí khiến thủ thư không thể tìm lại.',
    practicalTip: 'Sử dụng kẹp đánh dấu trang (bookmark) thay vì gập gãy góc sách; không dùng bút dạ quang tô vào sách dùng chung.',
    priority: 'mandatory',
    tags: ['Bảo quản sách', 'Thủ thư', 'Tài sản chung']
  },
  {
    id: 'li-03',
    categoryId: 'library',
    type: 'DONT',
    title: 'Dùng đồ đạc để "xí chỗ" rồi bỏ đi hàng giờ đồng hồ',
    summary: 'Không để tập vở, bình nước hoặc áo khoác chiếm giữ bàn ghế rồi ra ngoài ăn uống, đi chơi thời gian dài.',
    reason: 'Tước đoạt cơ hội học tập của những bạn đọc khác đang có mặt trực tiếp nhưng không tìm được chỗ ngồi.',
    practicalTip: 'Nếu cần rời thư viện quá 30 phút, hãy dọn đồ cá nhân vào balo để nhường vị trí cho người khác.',
    priority: 'courtesy',
    tags: ['Xí chỗ', 'Ý thức tự giác']
  },
  {
    id: 'li-04',
    categoryId: 'library',
    type: 'DONT',
    title: 'Ăn đồ ăn vặt gây mùi hoặc tạo tiếng sột soạt',
    summary: 'Không mang bánh tráng trộn, xoài lắc, bim bim nilon giòn tan vào phòng đọc sách.',
    reason: 'Tiếng xột xoạt của bao bì nilon làm phân tán tâm trí người đọc; dầu mỡ dính vào trang sách gây ố vàng và thu hút gián chuột.',
    practicalTip: 'Chỉ nên mang bình nước lọc có nắp đậy kín chống tràn; ăn nhẹ tại khu vực căng tin hoặc sảnh giải lao.',
    priority: 'mandatory',
    tags: ['Ăn vặt', 'Vệ sinh phòng đọc']
  },

  // 8. KHU DI TÍCH & NƠI TÔN NGHIÊM (HERITAGE & SACRED)
  {
    id: 'he-01',
    categoryId: 'heritage_sacred',
    type: 'DO',
    title: 'Trang phục kín đáo, lịch sự và trang nghiêm',
    summary: 'Mặc áo có tay, quần hoặc váy dài quá đầu gối khi bước vào chùa, đền, nhà thờ, lăng tẩm và nghĩa trang liệt sĩ.',
    reason: 'Thể hiện lòng thành kính đối với thần linh, tổ tiên, tiền nhân và tôn trọng thuần phong mỹ tục của dân tộc.',
    practicalTip: 'Nếu đi du lịch vào mùa hè có trang phục ngắn, hãy chuẩn bị sẵn một chiếc khăn choàng lớn hoặc áo khoác dài để khoác bên ngoài.',
    priority: 'mandatory',
    tags: ['Trang phục kín đáo', 'Tôn nghiêm', 'Đền chùa']
  },
  {
    id: 'he-02',
    categoryId: 'heritage_sacred',
    type: 'DO',
    title: 'Bỏ giày dép, mũ nón đúng nơi quy định',
    summary: 'Tháo giày dép xếp ngay ngắn lên giá để giày trước khi bước lên thềm chánh điện hoặc gian thờ chính.',
    reason: 'Giữ cho không gian hành lễ sạch sẽ tinh khiết, không vấy bẩn bụi đất từ bên ngoài vào chốn linh thiêng.',
    practicalTip: 'Mang tất (vớ) sạch để vừa giữ ấm chân vừa thể hiện sự lịch thiệp khi đi chân trần trên sàn đá chùa.',
    priority: 'mandatory',
    tags: ['Bỏ giày dép', 'Sạch sẽ nơi thờ tự']
  },
  {
    id: 'he-03',
    categoryId: 'heritage_sacred',
    type: 'DONT',
    title: 'Chạm tay, xoa tiền vào tượng Phật, hiện vật cổ kính',
    summary: 'Tuyệt đối không sờ vào tượng, không nhét tiền lẻ vào tay tượng hay kẽ nứt của bia đá lịch sử.',
    reason: 'Mồ hôi và axit từ bàn tay làm bào mòn lớp sơn son thếp vàng, phá hủy hiện vật cổ hàng trăm năm tuổi không thể phục hồi.',
    practicalTip: 'Đặt tiền công đức đúng vào các hòm công đức có niêm phong của ban quản lý di tích.',
    priority: 'mandatory',
    tags: ['Bảo vệ cổ vật', 'Không sờ tượng', 'Tiền công đức']
  },
  {
    id: 'he-04',
    categoryId: 'heritage_sacred',
    type: 'DONT',
    title: 'Khắc tên, viết vẽ lên thân cây, bia đá, cột gỗ di tích',
    summary: 'Không dùng dao, bút xóa hay vật nhọn để khắc "Kỷ niệm...", khắc tên tình yêu lên di tích lịch sử.',
    reason: 'Hành vi phá hoại di sản văn hóa quốc gia, để lại vết sẹo xấu xí trước mắt du khách trong và ngoài nước.',
    legalReference: 'Luật Di sản Văn hóa & Nghị định 38/2021/NĐ-CP: Phạt tiền từ 10.000.000đ - 20.000.000đ đối với hành vi làm hư hại di tích.',
    practicalTip: 'Lưu giữ kỷ niệm bằng tấm lòng kính ngưỡng và những bức ảnh kỷ niệm lịch sự từ góc máy trang trọng.',
    priority: 'mandatory',
    tags: ['Phá hoại di sản', 'Không khắc tên']
  },

  // 9. CƠ QUAN HÀNH CHÍNH & QUẦY DỊCH VỤ (ADMINISTRATIVE)
  {
    id: 'ad-01',
    categoryId: 'administrative',
    type: 'DO',
    title: 'Lấy số thứ tự và chuẩn bị đầy đủ hồ sơ trước',
    summary: 'Nhận số thứ tự tại máy cấp số, kiểm tra lại giấy tờ tùy thân (CCCD, bản sao công chứng) sẵn sàng trên tay.',
    reason: 'Giúp tiết kiệm thời gian xử lý cho cán bộ tiếp dân và giảm thời gian chờ đợi của những người đứng sau.',
    practicalTip: 'Đọc kỹ bảng hướng dẫn niêm yết tại sảnh hoặc hỏi cán bộ hỗ trợ tại bàn lễ tân để tránh thiếu sót giấy tờ.',
    priority: 'mandatory',
    tags: ['Lấy số thứ tự', 'Hồ sơ đầy đủ', 'Thủ tục hành chính']
  },
  {
    id: 'ad-02',
    categoryId: 'administrative',
    type: 'DO',
    title: 'Giữ thái độ nhã nhặn, tôn trọng nhân viên tiếp nhận',
    summary: 'Lắng nghe giải thích quy trình, trao đổi ôn hòa dù gặp vấn đề giấy tờ chưa hợp lệ.',
    reason: 'Đối thoại văn minh xây dựng sẽ giúp công việc được giải quyết nhanh chóng và hiệu quả hơn.',
    practicalTip: 'Nếu có điểm chưa hiểu, hãy hỏi nhẹ nhàng: "Chị vui lòng hướng dẫn giúp em mẫu đơn này cần bổ sung mục nào ạ?".',
    priority: 'courtesy',
    tags: ['Giao tiếp chuẩn mực', 'Cơ quan nhà nước']
  },
  {
    id: 'ad-03',
    categoryId: 'administrative',
    type: 'DONT',
    title: 'Chen ngang hàng hoặc đặt đồ giữ chỗ trước quầy',
    summary: 'Không bước tới nộp hồ sơ khi loa chưa gọi đến số thứ tự của mình; không nài nỉ xin làm trước.',
    reason: 'Gây hỗn loạn quy trình một cửa, mất công bằng cho những công dân đã xếp hàng chờ đợi từ sớm.',
    practicalTip: 'Ngồi đúng khu vực hàng ghế chờ theo dõi màn hình hiển thị số quầy.',
    priority: 'mandatory',
    tags: ['Không chen ngang', 'Công bằng xã hội']
  },
  {
    id: 'ad-04',
    categoryId: 'administrative',
    type: 'DONT',
    title: 'Gây ồn ào, quát tháo hoặc đập bàn ghế nơi công quyền',
    summary: 'Không to tiếng lăng mạ, quát tháo nhân viên hoặc đe dọa người làm nhiệm vụ.',
    reason: 'Làm mất trật tự an ninh cơ quan nhà nước và cấu thành hành vi vi phạm pháp luật nghiêm trọng.',
    legalReference: 'Nghị định 144/2021/NĐ-CP: Phạt tiền từ 3.000.000đ - 5.000.000đ đối với hành vi gây rối trật tự tại cơ quan, tổ chức.',
    practicalTip: 'Nếu không hài lòng về quy trình, hãy ghi ý kiến vào Sổ góp ý hoặc phản ánh qua đường dây nóng khiếu nại chính thức.',
    priority: 'mandatory',
    tags: ['Trật tự công sở', 'Xử lý văn minh']
  }
];

export const LEGAL_REGULATIONS: LegalRegulation[] = [
  {
    id: 'leg-01',
    behavior: 'Vứt, thải, bỏ rác thải sinh hoạt, mẩu tàn thuốc lá không đúng nơi quy định tại nơi công cộng',
    lawDoc: 'Nghị định 45/2022/NĐ-CP (Điều 25)',
    penaltyRange: '100.000đ – 1.000.000đ (Tùy vị trí vỉa hè hay lòng đường)',
    note: 'Áp dụng cho mọi hành vi vứt tàn thuốc, vỏ chai, túi nilon trên đường phố, vỉa hè, công viên.',
    category: 'Vệ sinh & Môi trường'
  },
  {
    id: 'leg-02',
    behavior: 'Tiểu tiện, đại tiện không đúng nơi quy định tại nơi công cộng (trừ trường hợp bệnh lý bất khả kháng)',
    lawDoc: 'Nghị định 45/2022/NĐ-CP (Điều 25)',
    penaltyRange: '150.000đ – 250.000đ',
    note: 'Hành vi tiểu bậy bờ tường, gốc cây, vỉa hè gây mất mỹ quan và ô nhiễm đô thị.',
    category: 'Văn minh đô thị'
  },
  {
    id: 'leg-03',
    behavior: 'Hút thuốc lá tại địa điểm có quy định cấm hút thuốc (bệnh viện, trường học, rạp chiếu phim, nơi công cộng)',
    lawDoc: 'Nghị định 117/2020/NĐ-CP (Điều 25)',
    penaltyRange: '200.000đ – 500.000đ',
    note: 'Người đứng đầu cơ sở không treo biển cấm hoặc không nhắc nhở cũng bị xử phạt từ 3 - 5 triệu đồng.',
    category: 'Y tế & Sức khỏe'
  },
  {
    id: 'leg-04',
    behavior: 'Không đeo rọ mõm cho chó hoặc không xích giữ chó, không có người dắt khi đưa chó ra nơi công cộng',
    lawDoc: 'Nghị định 04/2020/NĐ-CP (Điều 7)',
    penaltyRange: '1.000.000đ – 2.000.000đ',
    note: 'Nếu để chó cắn người gây thương tích hoặc lây bệnh dại, chủ nuôi phải bồi thường thiệt hại và có thể bị truy cứu hình sự.',
    category: 'An toàn thú cưng'
  },
  {
    id: 'leg-05',
    behavior: 'Gây tiếng động lớn, làm ồn ào, huyên náo tại khu dân cư, nơi công cộng trong khoảng thời gian từ 22h đêm đến 06h sáng hôm sau',
    lawDoc: 'Nghị định 144/2021/NĐ-CP (Điều 8)',
    penaltyRange: '500.000đ – 1.000.000đ',
    note: 'Bao gồm hát karaoke bằng loa kéo kẹo kéo, nẹt pô xe, đập phá gây ảnh hưởng giấc ngủ của người dân lân cận.',
    category: 'Tiếng ồn & Trật tự'
  },
  {
    id: 'leg-06',
    behavior: 'Phun sơn, viết, vẽ, dán, gắn hình ảnh, nội dung lên tường, cột điện hoặc công trình công cộng mà không được phép',
    lawDoc: 'Nghị định 144/2021/NĐ-CP (Điều 7)',
    penaltyRange: '1.000.000đ – 2.000.000đ + Buộc khôi phục lại tình trạng ban đầu',
    note: 'Áp dụng cho hành vi vẽ bậy bôi bẩn ghế đá công viên, cầu cống, tường nhà người khác.',
    category: 'Mỹ quan đô thị'
  },
  {
    id: 'leg-07',
    behavior: 'Gây rối trật tự công cộng tại cơ quan nhà nước, bệnh viện, nhà hát, bến xe, nơi tôn nghiêm',
    lawDoc: 'Nghị định 144/2021/NĐ-CP (Điều 7)',
    penaltyRange: '3.000.000đ – 5.000.000đ (Hoặc truy cứu trách nhiệm hình sự nếu nghiêm trọng)',
    note: 'Bao gồm hành vi lăng mạ nhân viên làm nhiệm vụ, đập phá bàn ghế, kích động đám đông.',
    category: 'An ninh trật tự'
  }
];
