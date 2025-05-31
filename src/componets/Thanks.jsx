import { BsFillEmojiHeartEyesFill, BsFillEmojiSmileFill, BsFillEmojiNeutralFill, BsFillEmojiFrownFill } from 'react-icons/bs';
import './Thanks.css';

const emojiData = {
  unsatisfied: <BsFillEmojiFrownFill />,
  neutral: <BsFillEmojiNeutralFill />,
  satisfied:<BsFillEmojiSmileFill />,
  verySatisfied: <BsFillEmojiHeartEyesFill />,
}

const Thanks = ({ data }) => {
  return (
    <div className="thanks-container">
      <h2>Falta pouco...</h2>
      <p>A sua opinião é muito importante para nós, em breve você receberá um cupom de 10% de desconto para sua próxima compra.</p>
      <p>Para completar sua avaliação, clique no botão de Enviar abaixo.</p>
      <h3>Resumo da sua avaliação {data.name}:</h3>
      <p className="review-data">
        <span>Satisfação: </span>
        {emojiData[data.review]}
      </p>
      <p className="review-data">
        <span>Comentário: </span>
        {data.comment}
      </p>
    </div>
  )
}

export default Thanks