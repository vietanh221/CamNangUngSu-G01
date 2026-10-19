import { SituationScenario, QuizQuestion } from '../types';

export const POPULAR_SCENARIOS: SituationScenario[] = [
  {
    id: 'scen-01',
    title: 'Người ngồi bên cạnh trên xe buýt/tàu điện ngầm bật loa ngoài to',
    location: 'Phương tiện công cộng (Xe buýt, Metro)',
    description: 'Hành khách bên cạnh đang mở video TikTok hoặc nghe nhạc bằng loa ngoài rất lớn, khiến bạn và các hành khách xung quanh đau đầu và không thể nghỉ ngơi.',
    context: 'Thường đối phương không cố ý khiêu khích mà chỉ do vô ý thức hoặc quen thói quen cá nhân tại nhà. Nếu bị chỉ trích gay gắt ngay lập tức, họ dễ có tâm lý tự vệ và nổi nóng.',
    suggestedSteps: [
      {
        step: 1,
        title: 'Giữ thái độ hòa nhã, ánh mắt thân thiện',
        action: 'Không trừng mắt hay thở dài cáu kỉnh. Hãy quay sang nhẹ nhàng mỉm cười để giảm bớt căng thẳng ban đầu.',
        tone: 'Lịch sự, không phán xét'
      },
      {
        step: 2,
        title: 'Dùng cấu trúc "Nhờ vả vì lý do cá nhân"',
        action: 'Đặt trọng tâm vào cảm nhận của bản thân thay vì đổ lỗi cho đối phương (VD: "Mình đang hơi say xe/đau đầu" thay vì "Bạn vô ý thức quá").',
        tone: 'Chân thành, nhã nhặn'
      },
      {
        step: 3,
        title: 'Nếu đối phương không hợp tác, nhờ nhân viên',
        action: 'Nếu người đó tỏ thái độ thách thức, tuyệt đối không đôi co cãi vã. Hãy báo nhẹ nhàng với tiếp viên/tài xế xe buýt hoặc bảo vệ toa tàu can thiệp theo quy chế xe.',
        tone: 'Bình tĩnh, kiên quyết'
      }
    ],
    sampleQuotes: [
      '"Dạ bạn ơi, mình đang hơi đau đầu một chút/cần tập trung, bạn có thể vặn nhỏ âm lượng hoặc dùng tai nghe giúp mình với được không ạ? Cảm ơn bạn rất nhiều nhé!"',
      '"Phiền anh/chị hạ bớt âm thanh xuống một chút để mọi người trên xe cùng nghỉ ngơi với ạ, cảm ơn anh/chị!"'
    ],
    mistakesToAvoid: [
      'Gắt gỏng quát tháo: "Tắt loa đi, điếc tai quá!", khiến đối phương mất mặt và phản ứng tiêu cực.',
      'Rút điện thoại quay phim cận cảnh mặt họ đăng mạng xã hội bóc phốt (vi phạm quyền hình ảnh).',
      'Đua nhau bật loa to hơn để "trả đũa", biến khoang xe thành bãi chiến trường âm thanh.'
    ],
    civicNote: 'Phép lịch sự nơi công cộng không phải là chịu đựng trong ấm ức, mà là giao tiếp lịch sự để cùng giữ gìn không gian chung.'
  },
  {
    id: 'scen-02',
    title: 'Bị chen ngang hàng tại quầy thanh toán siêu thị hoặc quầy vé',
    location: 'Siêu thị, quầy vé, khu dịch vụ',
    description: 'Bạn đang kiên nhẫn xếp hàng hơn 10 phút thì một người từ bên ngoài thản nhiên bước thẳng lên trước mặt bạn đặt đồ lên quầy thanh toán.',
    context: 'Người chen hàng có thể vội vã, hoặc cố tình thử xem người xung quanh có phản ứng hay không. Sự im lặng của đám đông vô tình dung túng cho hành vi thiếu văn minh.',
    suggestedSteps: [
      {
        step: 1,
        title: 'Lên tiếng ngay lập tức nhưng với giọng nói rõ ràng, bình thản',
        action: 'Nhắc nhở ngay khoảnh khắc họ vừa chen vào, không nên đợi đến khi thu ngân bắt đầu quét mã hàng hóa.',
        tone: 'Rõ ràng, dứt khoát và bình tĩnh'
      },
      {
        step: 2,
        title: 'Chỉ dẫn vị trí cuối hàng cụ thể',
        action: 'Tay hướng về phía sau hàng người: "Mọi người đều đang xếp hàng từ phía sau kia ạ, phiền anh/chị di chuyển xuống phía sau giúp nhé".',
        tone: 'Khách quan, đứng về quy tắc chung'
      },
      {
        step: 3,
        title: 'Trường hợp họ có việc đặc biệt khẩn cấp',
        action: 'Nếu họ xin phép vì lý do chính đáng (người nhà đang cấp cứu, lỡ chuyến tàu xe), bạn và mọi người có thể chủ động đồng thuận nhường với nụ cười cảm thông.',
        tone: 'Linh hoạt, nhân ái'
      }
    ],
    sampleQuotes: [
      '"Dạ anh/chị ơi, mọi người ở đây đều đang xếp hàng theo thứ tự từ phía sau kia ạ, phiền anh/chị lùi xuống xếp hàng giúp để công bằng cho mọi người nhé ạ."',
      '"Dạ quầy này đang xếp hàng lần lượt ạ, anh/chị vui lòng đứng sau bạn này giúp em nhé!"'
    ],
    mistakesToAvoid: [
      'Xô đẩy, giật lấy giỏ hàng của họ vứt ra sau.',
      'Im lặng chịu đựng rồi lầm bầm chửi đổng sau lưng.',
      'Nói những lời miệt thị nhân phẩm hay vùng miền.'
    ],
    civicNote: 'Văn hóa xếp hàng thể hiện tính công bằng và trật tự của một xã hội văn minh.'
  },
  {
    id: 'scen-03',
    title: 'Người ngồi phía sau liên tục đạp vào lưng ghế trong rạp chiếu phim',
    location: 'Rạp chiếu phim, nhà hát',
    description: 'Bộ phim đang đến đoạn gay cấn thì lưng ghế của bạn bị rung lắc liên hồi do người ngồi sau co chân hoặc vô ý đạp giày vào thành ghế.',
    context: 'Khoảng cách giữa hai hàng ghế ở một số rạp khá hẹp; người ngồi sau có thể là người cao hoặc trẻ nhỏ vô ý cựa quậy.',
    suggestedSteps: [
      {
        step: 1,
        title: 'Chờ khoảnh khắc âm lượng tạm nghỉ để giao tiếp',
        action: 'Không nói to làm ảnh hưởng những người khác trong rạp. Quay nhẹ đầu lại phía sau ra hiệu.',
        tone: 'Nhỏ nhẹ, kín đáo'
      },
      {
        step: 2,
        title: 'Nhắc nhở ngắn gọn và nêu rõ tác động',
        action: 'Thông báo cho họ biết ghế trước bị rung rất mạnh để họ nhận thức được hành vi vô ý của mình.',
        tone: 'Mềm mỏng, lịch sự'
      },
      {
        step: 3,
        title: 'Nhờ nhân viên rạp (Usher) nếu tình trạng tái diễn',
        action: 'Bước ra ngoài cửa phòng chiếu, báo với nhân viên soát vé hỗ trợ nhắc nhở hoặc xin đổi sang ghế trống khác.',
        tone: 'Chuyên nghiệp'
      }
    ],
    sampleQuotes: [
      '"Dạ bạn ơi, chân bạn đang chạm vào lưng ghế mình làm ghế bị rung khá nhiều ạ, bạn để ý giúp mình chút nhé, cảm ơn bạn!"',
      '"Bác/bạn vui lòng tránh chạm vào lưng ghế giúp em với ạ, em cảm ơn nhiều."'
    ],
    mistakesToAvoid: [
      'Bất ngờ quay lại đập mạnh vào tay ghế họ quát tháo.',
      'Cố tình ngả lưng hết cỡ ra sau để chèn ép chân họ trả thù.',
      'Để sự bực tức phá hỏng toàn bộ trải nghiệm thưởng thức bộ phim.'
    ],
    civicNote: 'Tôn trọng không gian ngồi của người khác là bài học cơ bản nhất khi bước chân vào rạp nghệ thuật.'
  },
  {
    id: 'scen-04',
    title: 'Phát hiện có người hút thuốc lá tại nơi có biển cấm (Bệnh viện, Công viên trẻ em)',
    location: 'Bệnh viện, trạm xe buýt, khu vui chơi',
    description: 'Một người đàn ông đang vô tư phì phèo điếu thuốc lá ngay tại khu vực chờ khám bệnh viện hoặc bên cạnh xích đu trẻ em đang chơi.',
    context: 'Khói thuốc thụ động cực kỳ độc hại cho thai phụ và trẻ nhỏ. Người hút thường mang tâm lý "hút tí rồi thôi" nếu không có ai lên tiếng.',
    suggestedSteps: [
      {
        step: 1,
        title: 'Chỉ tay về phía biển cấm hút thuốc (No Smoking)',
        action: 'Đứng cách một khoảng an toàn, nhẹ nhàng đưa tay chỉ biển báo quy định của cơ sở.',
        tone: 'Khách quan, dựa trên quy định pháp luật'
      },
      {
        step: 2,
        title: 'Nêu sự hiện diện của đối tượng dễ bị tổn thương',
        action: 'Nhắc khéo rằng ở đây có bệnh nhân đang thở máy / trẻ em đang hít phải khói thuốc.',
        tone: 'Tình cảm, thuyết phục'
      },
      {
        step: 3,
        title: 'Chỉ dẫn ra khu vực được phép hút thuốc (nếu biết)',
        action: 'Hướng dẫn họ: "Dạ ngoài cổng/khu vực ngoài trời đằng kia có gạt tàn riêng ạ".',
        tone: 'Tích cực, giải pháp'
      }
    ],
    sampleQuotes: [
      '"Dạ chú/anh ơi, khu vực này bệnh viện có quy định cấm hút thuốc và ở đây có nhiều trẻ em/bệnh nhân ạ. Phiền chú/anh dập thuốc giúp hoặc di chuyển ra ngoài cổng hút giúp cháu với nhé ạ."',
      '"Dạ ở đây có biển cấm hút thuốc ạ, anh vui lòng dập thuốc giúp em để giữ không khí chung nhé."'
    ],
    mistakesToAvoid: [
      'Lao vào giật điếu thuốc trên môi người khác vứt xuống đất.',
      'Chửi bới xúc phạm dễ dẫn đến va chạm xô xát thể xác nguy hiểm.',
      'Hít thở khói độc trong im lặng làm hại sức khỏe chính mình và người thân.'
    ],
    civicNote: 'Luật Phòng chống tác hại của thuốc lá quy định rõ quyền của mọi công dân được yêu cầu người hút thuốc chấm dứt hành vi tại địa điểm cấm.'
  },
  {
    id: 'scen-05',
    title: 'Trẻ nhỏ đi cùng chạy nhảy làm đổ vỡ đồ hoặc làm phiền bàn khác',
    location: 'Nhà hàng, quán ăn, quán cà phê',
    description: 'Trẻ em hiếu động chạy nô đùa giữa các dãy bàn, hét to và vô tình va phải nhân viên phục vụ đang bưng đồ uống nóng.',
    context: 'Dưới góc độ phụ huynh, áp lực trông con rất lớn. Dưới góc độ cộng đồng, sự an toàn tính mạng của trẻ là ưu tiên cao nhất.',
    suggestedSteps: [
      {
        step: 1,
        title: 'Nếu là phụ huynh: Đặt sự an toàn lên hàng đầu',
        action: 'Ngay lập tức gọi bé lại, ôm bé vào lòng, giải thích nguy cơ bị nước sôi/canh nóng bắn vào người gây bỏng.',
        tone: 'Nghiêm túc, ấm áp'
      },
      {
        step: 2,
        title: 'Chủ động xin lỗi bàn bên cạnh trước',
        action: 'Một lời xin lỗi chủ động từ bố mẹ sẽ xóa tan 90% sự khó chịu của những thực khách xung quanh.',
        tone: 'Cầu thị, văn minh'
      },
      {
        step: 3,
        title: 'Chuyển hướng chú ý của trẻ bằng hoạt động tĩnh',
        action: 'Cho bé tập tô màu, xếp hình hoặc đưa bé ra ngoài ban công dạo một vòng xả năng lượng.',
        tone: 'Kiên nhẫn, thấu hiểu'
      }
    ],
    sampleQuotes: [
      '"Dạ em xin lỗi mọi người ở bàn bên ạ! Cháu nhà em hơi hiếu động một chút, em đã nhắc nhở cháu rồi, mong anh/chị thông cảm giúp gia đình em nhé ạ!"',
      '"(Nói với con): Nơi này nhân viên đang bưng đồ nóng rất nguy hiểm, con ngồi ngoan tại bàn cùng mẹ vẽ bức tranh này nhé."'
    ],
    mistakesToAvoid: [
      'Mặc kệ con muốn làm gì thì làm với suy nghĩ: "Trẻ con biết cái gì mà chấp".',
      'Đánh mắng, quát tháo dữ dội đòn roi ngay giữa nhà hàng làm trẻ hoảng loạn la to hơn.',
      'Tranh cãi với thực khách khác khi họ góp ý về việc giữ an toàn cho bé.'
    ],
    civicNote: 'Nuôi dưỡng một đứa trẻ biết tôn trọng không gian công cộng bắt đầu từ chính hành vi ứng xử gương mẫu của cha mẹ.'
  }
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    location: 'Cầu thang cuốn siêu thị / Ga Metro',
    scenario: 'Bạn đang đi thang cuốn tại trung tâm thương mại hoặc ga tàu điện Metro, bạn nên đứng ở vị trí nào theo quy tắc văn minh?',
    question: 'Quy tắc đứng trên cầu thang cuốn nào sau đây là chuẩn mực nhất?',
    options: [
      {
        id: 'A',
        text: 'Đứng dàn hàng ngang cả 2 bên cùng bạn bè để vừa đi vừa trò chuyện vui vẻ.',
        isCorrect: false,
        explanation: 'Sai. Đứng dàn hàng ngang sẽ bịt kín toàn bộ lối đi, cản trở những người đang có việc khẩn cấp cần bước lên.'
      },
      {
        id: 'B',
        text: 'Đứng nép sát về phía bên phải, chừa làn bên trái cho người có việc vội bước lên.',
        isCorrect: true,
        explanation: 'Chính xác! Đứng bên phải và chừa làn bên trái trống là quy ước di chuyển văn minh trên toàn cầu và hệ thống Metro hiện đại.'
      },
      {
        id: 'C',
        text: 'Ngồi bệt xuống bậc thang cuốn để nghỉ chân cho đỡ mỏi.',
        isCorrect: false,
        explanation: 'Sai và cực kỳ nguy hiểm. Quần áo hoặc tóc có thể bị cuốn vào khe rãnh bậc thang dẫn đến tai nạn kẹt thang nghiêm trọng.'
      },
      {
        id: 'D',
        text: 'Chạy ngược chiều thang cuốn để rèn luyện thể lực.',
        isCorrect: false,
        explanation: 'Sai. Đây là hành vi nghịch ngợm gây nguy hiểm tính mạng cho bản thân và người cùng đi thang.'
      }
    ]
  },
  {
    id: 2,
    location: 'Thang máy tòa nhà cao tầng',
    scenario: 'Bạn đang đứng chờ thang máy ở sảnh vào giờ tan tầm đông đúc. Cửa thang máy vừa mở ra, hành vi nào sau đây là đúng đắn?',
    question: 'Bạn nên hành động như thế nào ngay khi cửa thang máy mở ra?',
    options: [
      {
        id: 'A',
        text: 'Nhanh chân ùa vào cabin trước để chiếm chỗ đứng góc trong cùng thoải mái.',
        isCorrect: false,
        explanation: 'Sai. Chen vào khi người bên trong chưa kịp ra sẽ làm tắc nghẽn cửa cabin.'
      },
      {
        id: 'B',
        text: 'Đứng nép sang hai bên cửa, đợi người bên trong bước ra hết rồi mới lần lượt bước vào.',
        isCorrect: true,
        explanation: 'Rất chính xác! Nguyên tắc vàng là "Ra trước - Vào sau" giúp giải phóng không gian cabin trước khi đón lượt người mới.'
      },
      {
        id: 'C',
        text: 'Đứng ngay chính giữa cửa thang để nhìn xem bên trong còn chỗ trống hay không.',
        isCorrect: false,
        explanation: 'Sai. Đứng giữa luồng cửa sẽ cản đường bước ra của những người trong thang.'
      },
      {
        id: 'D',
        text: 'Thò một tay hoặc chân vào giữa khe cửa để ngăn cửa không đóng lại.',
        isCorrect: false,
        explanation: 'Sai. Dùng tay chân chặn cửa có thể khiến cảm biến bị lỗi hoặc gây chấn thương kẹt tay chân; nên dùng nút giữ cửa [ < > ].'
      }
    ]
  },
  {
    id: 3,
    location: 'Xe buýt / Toa tàu Metro',
    scenario: 'Bạn đang ngồi trên xe buýt và có cuộc gọi điện thoại quan trọng từ công việc hoặc người thân. Cách ứng xử nào sau đây là lịch sự nhất?',
    question: 'Bạn nên xử lý cuộc gọi trên phương tiện công cộng như thế nào?',
    options: [
      {
        id: 'A',
        text: 'Bật loa ngoài thật to để người đối diện nghe rõ tiếng mình trong tiếng ồn động cơ.',
        isCorrect: false,
        explanation: 'Sai. Loa ngoài làm phiền toái cả toa xe và làm lộ chuyện riêng tư của bạn.'
      },
      {
        id: 'B',
        text: 'Nói to giọng để lấn át tiếng ồn của xe và giải thích chi tiết câu chuyện dài 30 phút.',
        isCorrect: false,
        explanation: 'Sai. Không ai trên phương tiện công cộng muốn bị ép phải nghe cuộc trò chuyện riêng tư của người khác.'
      },
      {
        id: 'C',
        text: 'Hạ giọng nói khẽ, che miệng vừa đủ nghe hoặc nhắn tin hẹn gọi lại sau khi xuống xe.',
        isCorrect: true,
        explanation: 'Tuyệt vời! Nếu cần thiết hãy nói khẽ và kết thúc cuộc gọi trong vòng 1-2 phút, hoặc nhắn tin hẹn gọi lại khi rời phương tiện.'
      },
      {
        id: 'D',
        text: 'Chuyền điện thoại cho bác tài xế nhờ nghe hộ.',
        isCorrect: false,
        explanation: 'Sai hoàn toàn. Làm tài xế mất tập trung là hành vi đe dọa trực tiếp đến an toàn của toàn bộ hành khách.'
      }
    ]
  },
  {
    id: 4,
    location: 'Rạp chiếu phim',
    scenario: 'Khi vào rạp chiếu phim, bạn cần làm gì với chiếc điện thoại di động của mình?',
    question: 'Hành vi chuẩn mực nhất đối với điện thoại trong rạp chiếu phim là gì?',
    options: [
      {
        id: 'A',
        text: 'Chuyển sang chế độ rung/im lặng và hạn chế tối đa bật sáng màn hình điện thoại.',
        isCorrect: true,
        explanation: 'Chính xác! Ánh sáng xanh chói lóa trong bóng tối và tiếng chuông reo là điều tối kỵ trong văn hóa xem phim rạp.'
      },
      {
        id: 'B',
        text: 'Bật độ sáng tối đa để dễ nhìn thấy đường đi trong bóng tối khi cần đi vệ sinh.',
        isCorrect: false,
        explanation: 'Sai. Màn hình sáng trưng sẽ làm chói mắt hàng chục khán giả ngồi các hàng ghế phía sau.'
      },
      {
        id: 'C',
        text: 'Bật livestream toàn bộ bộ phim lên trang cá nhân để bạn bè cùng thưởng thức.',
        isCorrect: false,
        explanation: 'Sai nghiêm trọng. Đây là hành vi vi phạm bản quyền sở hữu trí tuệ có thể bị xử lý hình sự.'
      },
      {
        id: 'D',
        text: 'Để chuông to để không bị bỏ lỡ thông báo của mạng xã hội.',
        isCorrect: false,
        explanation: 'Sai. Tiếng chuông sẽ phá hỏng cảm xúc của toàn bộ khán phòng.'
      }
    ]
  },
  {
    id: 5,
    location: 'Công viên cây xanh / Nơi công cộng',
    scenario: 'Bạn vừa ăn xong một chiếc bánh và uống hết chai nước tại công viên, nhưng tìm quanh bán kính 50 mét không thấy có thùng rác. Bạn nên xử lý thế nào?',
    question: 'Cách xử lý văn minh nhất khi không tìm thấy thùng rác xung quanh là:',
    options: [
      {
        id: 'A',
        text: 'Nhét chai nhựa và vỏ bánh vào sâu trong gốc cây hoặc bụi rậm để không ai nhìn thấy.',
        isCorrect: false,
        explanation: 'Sai. Bụi cây không phải là nơi chứa rác, rác thải khó phân hủy sẽ gây ô nhiễm đất và mất mỹ quan đô thị.'
      },
      {
        id: 'B',
        text: 'Cứ để lại trên ghế đá công viên vì sẽ có nhân viên vệ sinh đi gom sau.',
        isCorrect: false,
        explanation: 'Sai. Nhân viên môi trường vất vả dọn dẹp không đồng nghĩa với việc chúng ta có quyền xả rác bừa bãi.'
      },
      {
        id: 'C',
        text: 'Cất rác vào balo hoặc túi xách cá nhân, mang theo đến khi gặp thùng rác mới bỏ vào.',
        isCorrect: true,
        explanation: 'Xuất sắc! Phương châm "Không để lại gì ngoài những dấu chân - Tự chịu trách nhiệm với rác của mình" là biểu hiện cao nhất của công dân văn minh.'
      },
      {
        id: 'D',
        text: 'Vứt xuống lòng hồ công viên cho cá ăn.',
        isCorrect: false,
        explanation: 'Sai và gây hại nghiêm trọng cho hệ sinh thái thủy sinh trong hồ.'
      }
    ]
  },
  {
    id: 6,
    location: 'Khu di tích lịch sử & Đền chùa',
    scenario: 'Khi đi tham quan một ngôi chùa cổ kính hoặc nhà thờ lịch sử, điều nào sau đây là hành vi NÊN LÀM?',
    question: 'Hành vi nào thể hiện đúng nét đẹp văn hóa khi đến chốn tôn nghiêm?',
    options: [
      {
        id: 'A',
        text: 'Dùng bút xóa hoặc chìa khóa khắc tên mình và người yêu lên cột gỗ để kỷ niệm.',
        isCorrect: false,
        explanation: 'Sai. Hành vi phá hoại di sản có thể bị phạt tiền từ 10 - 20 triệu đồng theo pháp luật.'
      },
      {
        id: 'B',
        text: 'Mặc trang phục kín đáo, áo có tay, quần/váy dài quá đầu gối và đi nhẹ nói khẽ.',
        isCorrect: true,
        explanation: 'Rất chính xác! Trang phục trang nhã, thái độ cung kính là sự tôn trọng đối với tín ngưỡng và giá trị tâm linh của cộng đồng.'
      },
      {
        id: 'C',
        text: 'Xoa tay và nhét tiền lẻ vào tay hoặc chân các bức tượng cổ để xin lộc.',
        isCorrect: false,
        explanation: 'Sai. Mồ hôi tay làm bào mòn lớp son son và gỉ sét kim loại cổ vật; tiền công đức nên đặt vào hòm niêm phong.'
      },
      {
        id: 'D',
        text: 'Tạo dáng phản cảm hoặc leo lên bia đá ngồi để chụp ảnh sống ảo.',
        isCorrect: false,
        explanation: 'Sai. Bia đá là di vật lịch sử linh thiêng, tuyệt đối không được giẫm đạp hay ngồi lên.'
      }
    ]
  },
  {
    id: 7,
    location: 'Quán cà phê / Nhà hàng',
    scenario: 'Bạn cần gọi nhân viên phục vụ khi bàn của bạn cần thêm nước hoặc gọi món mới. Cách làm nào thể hiện sự lịch thiệp nhất?',
    question: 'Cách gọi nhân viên phục vụ nào sau đây là văn minh và tôn trọng nhất?',
    options: [
      {
        id: 'A',
        text: 'Búng ngón tay liên tục "chách chách" hoặc huýt sáo vang dội qua nhiều bàn.',
        isCorrect: false,
        explanation: 'Sai. Đây là hành vi thiếu tôn trọng nhân phẩm người lao động phục vụ.'
      },
      {
        id: 'B',
        text: 'Gõ đũa bát đĩa kêu leng keng liên hồi để thu hút sự chú ý.',
        isCorrect: false,
        explanation: 'Sai. Gõ bát đĩa vừa mất lịch sự vừa gây ồn ào phản cảm cho cả quán.'
      },
      {
        id: 'C',
        text: 'Giao tiếp bằng ánh mắt, giơ tay nhẹ nhàng ngang tầm mắt kèm nụ cười và lời gọi nhã nhặn.',
        isCorrect: true,
        explanation: 'Rất chuẩn! Một ánh mắt thiện cảm, giơ tay vừa phải và lời nói: "Em ơi hỗ trợ anh/chị chút nhé" thể hiện đẳng cấp văn minh của bạn.'
      },
      {
        id: 'D',
        text: 'Hét lớn từ xa bằng tên tục hoặc quát tháo.',
        isCorrect: false,
        explanation: 'Sai hoàn toàn.'
      }
    ]
  },
  {
    id: 8,
    location: 'Bệnh viện & Cơ sở y tế',
    scenario: 'Bạn đi thăm người thân ốm nằm tại phòng bệnh nội trú đông bệnh nhân. Điều nào sau đây là KHÔNG NÊN LÀM?',
    question: 'Hành vi nào bạn cần TUYỆT ĐỐI TRÁNH khi ở trong phòng bệnh?',
    options: [
      {
        id: 'A',
        text: 'Nói chuyện thì thầm vừa đủ nghe, đi lại khẽ khàng.',
        isCorrect: false,
        explanation: 'Đây là hành vi NÊN LÀM.'
      },
      {
        id: 'B',
        text: 'Rủ cả hội bạn bè 7-8 người vào tụ tập trò chuyện rôm rả, cười nói lớn tiếng.',
        isCorrect: true,
        explanation: 'Chính xác là KHÔNG NÊN LÀM! Tụ tập đông người làm ngột ngạt không khí, tăng nguy cơ lây nhiễm chéo và quấy rầy giấc ngủ hồi phục của các bệnh nhân khác.'
      },
      {
        id: 'C',
        text: 'Đeo khẩu trang y tế và rửa tay bằng dung dịch cồn sát khuẩn.',
        isCorrect: false,
        explanation: 'Đây là hành vi NÊN LÀM để bảo vệ sức khỏe.'
      },
      {
        id: 'D',
        text: 'Hỏi thăm ngắn gọn trong 15-20 phút rồi nhường không gian cho người bệnh nghỉ ngơi.',
        isCorrect: false,
        explanation: 'Đây là hành vi NÊN LÀM.'
      }
    ]
  },
  {
    id: 9,
    location: 'Đường phố & Công viên',
    scenario: 'Bạn dắt một chú chó cưng nặng 15kg đi dạo chơi ngoài công viên đông người vào buổi chiều. Trách nhiệm pháp lý và văn minh của bạn là gì?',
    question: 'Hành vi nào bắt buộc theo quy định pháp luật khi đưa chó ra nơi công cộng?',
    options: [
      {
        id: 'A',
        text: 'Thả rông chó chạy tự do để chó được vui vẻ hòa nhập cùng các bé thiếu nhi.',
        isCorrect: false,
        explanation: 'Sai và vi phạm pháp luật! Chó dù hiền ở nhà nhưng nơi đông người có thể giật mình cắn người gây nguy hiểm tính mạng.'
      },
      {
        id: 'B',
        text: 'Luôn đeo xích giữ chó, rọ mõm và chủ động mang theo túi để thu dọn phân thú cưng.',
        isCorrect: true,
        explanation: 'Chính xác! Nghị định 04/2020/NĐ-CP quy định xử phạt từ 1 - 2 triệu đồng nếu không rọ mõm hoặc không xích chó nơi công cộng.'
      },
      {
        id: 'C',
        text: 'Nếu chó đi vệ sinh ra lối đi bộ thì nhanh chóng dắt chó chạy đi chỗ khác thật nhanh.',
        isCorrect: false,
        explanation: 'Sai. Hành vi trốn tránh trách nhiệm làm bẩn lối đi của cộng đồng.'
      },
      {
        id: 'D',
        text: 'Cho chó tắm chung trong đài phun nước công cộng.',
        isCorrect: false,
        explanation: 'Sai. Đài phun nước không phải bể tắm thú cưng.'
      }
    ]
  },
  {
    id: 10,
    location: 'Khu dân cư đô thị',
    scenario: 'Gia đình bạn tổ chức tiệc sinh nhật vào buổi tối cuối tuần. Theo quy định pháp luật Việt Nam, hành vi gây tiếng động lớn quá giờ nào sau đây sẽ bị xử phạt vi phạm hành chính?',
    question: 'Khoảng thời gian nào trong ngày bị nghiêm cấm gây tiếng động ồn ào tại khu dân cư?',
    options: [
      {
        id: 'A',
        text: 'Sau 20h00 tối.',
        isCorrect: false,
        explanation: 'Chưa chính xác theo khung giờ xử phạt hành chính của Nghị định 144/2021/NĐ-CP.'
      },
      {
        id: 'B',
        text: 'Từ 22h00 đêm đến 06h00 sáng hôm sau.',
        isCorrect: true,
        explanation: 'Chính xác! Theo Điều 8 Nghị định 144/2021/NĐ-CP, hành vi gây tiếng động lớn, ồn ào tại khu dân cư từ 22h đến 06h sáng sẽ bị phạt tiền từ 500.000đ - 1.000.000đ.'
      },
      {
        id: 'C',
        text: 'Sau 24h00 đêm.',
        isCorrect: false,
        explanation: 'Sai. 22h đêm đã là mốc giới nghiêm về trật tự âm thanh khu dân cư.'
      },
      {
        id: 'D',
        text: 'Chỉ bị phạt vào những ngày trong tuần, cuối tuần được phép tự do gây ồn cả đêm.',
        isCorrect: false,
        explanation: 'Sai. Quy định áp dụng tất cả các ngày trong tuần để bảo vệ giấc ngủ của người dân, người già và trẻ nhỏ.'
      }
    ]
  }
];
