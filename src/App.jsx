// importando icones do react
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { FiSend } from "react-icons/fi";

// importando os componentes
import UserForm from "./componets/UserForm";
import ReviewForm from "./componets/ReviewForm";
import Thanks from "./componets/Thanks";
import Steps from "./componets/Steps";

// importando o hook
import { useForm } from "./hooks/userForm";
import { useState } from "react";

import "./App.css";

const formTemplate = {
  name: "",
  email: "",
  review: "",
  comment: "",
};

function App() {
  const [data, setData] = useState(formTemplate);

  const updateFieldHandler = (key, value) => {
    setData((prev) => {
      return { ...prev, [key]: value };
    });
  };

  const formComponents = [
    <UserForm data={data} updateFieldHandler={updateFieldHandler} />,
    <ReviewForm data={data} updateFieldHandler={updateFieldHandler}/>,
    <Thanks data={data} />,
  ];

  const {
    currentStep,
    currentComponent,
    changeCurrentStep,
    firstStep,
    lastStep,
  } = useForm(formComponents);

  return (
    <div className="app">
      <div className="header">
        <h2>Deixe sua avaliação</h2>
        <p>
          Ficamos muitos felizes com a sua compra, utilize o formulário para
          avaliar sua compra.
        </p>
      </div>

      <div className="form-container">
        <Steps currentStep={currentStep} />

        <form onSubmit={(e) => changeCurrentStep(currentStep + 1, e)}>
          <div className="inputs-container">{currentComponent}</div>

          <div className="actions">
            {/* O botão de VOLTAR não tem no primeiro componente apenas o de avançar */}
            {!firstStep && (
              <button
                type="button"
                onClick={() => changeCurrentStep(currentStep - 1)}
              >
                {" "}
                {/* O botão tem evento de click ela irá acessar a função changeCurrentStep pega indice que ele está e subtrai por 1*/}
                <GrFormPrevious />
                <span>Voltar</span>
              </button>
            )}

            {/* O botão de AVANÇAR não tem no último componente apenas o de voltar e enviar */}
            {!lastStep ? (
              <button type="submit">
                <span>Avançar</span>
                <GrFormNext />
              </button>
            ) : (
              <button type="button">
                <span>Enviar</span>
                <FiSend />
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
