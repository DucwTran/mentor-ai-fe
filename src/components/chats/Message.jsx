import { Stack } from '@mui/material'

function Message({ isMine, content }) {
  const messageContent =
    content ||
    'Định lý Bayes (Tiếng Anh: Bayes theorem) là một kết quả của lý thuyết xác suất. Nó phản ánh mối quan hệ giữa xác suất của một biến cố mà không quan tâm các yếu tố khác (gọi là xác suất biên hay xác suất tiền nghiệm) với xác suất của biến cố đó sau khi một biến cố khác đã xảy ra (gọi là xác suất có điều kiện hay xác suất hậu nghiệm).Cụ thể hơn, nó đề cập đến phân bố xác suất có điều kiện của biến ngẫu nhiên A, với giả thiết: thông tin về mộtbiến khác B: phân bố xác suất có điều kiện của B khi biết A, và phân bố xác suất của một mình A. Định lý Bayeslà một khái niệm đặt nền tảng cho thống kê Bayes, một trường phái suy luận thống kê dựa trên bằng chứng và niềmtin và tồn tại song song với trường phái suy luận thống kê mẫu lặp (frequentist). Trong suy luận Bayes, xác suấtđược coi là một phép đo về niềm tin vào khả năng xảy ra một sự kiện, và được cập nhật liên tục mỗi khi quan sátđược một bằng chứng (hay một điểm dữ liệu) mới.'

  return (
    <Stack
      className={`${
        isMine
          ? 'bg-[#00bd9b] text-white p-3 rounded-lg max-w-[50%] self-end' // Tin nhắn của mình
          : 'bg-[#e2e2e2] text-black p-3 rounded-lg max-w-[50%] self-start' // Tin nhắn của người khác
      }`}
      ref={scroll}
    >
      <span>{messageContent}</span>
    </Stack>
  )
}

export default Message
