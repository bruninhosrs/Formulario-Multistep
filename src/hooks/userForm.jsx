import { useState } from "react";

export function useForm(steps) { // step = etapas
    const [currentStep, setCurrentStep] = useState(0);

    const changeCurrentStep = (i, e) => { // changeCurrentStep = alterarEtapaAtual / i = indice
       if(e) e.preventDefault();

        if(i < 0 || i >= steps.length) return; // Se indice for menor que 0 ou maior e igual que o número de etapas ele retorna (erro)

        setCurrentStep(i);

    }

    return {
        currentStep,
        currentComponent: steps[currentStep], // currentStep = etapa atual
        changeCurrentStep,
        firstStep: currentStep === 0 ? true : false,
        lastStep: currentStep + 1 === steps.length ? true : false,
    };

}