import templayed from './templayed';

const mergeTextTemplate = async ({ templateText, variables }) => {
  const template = templateText.map((variable) => variable.value).join('');

  const variableMap = variables.reduce((previousValue, currentValue) => {
    previousValue[currentValue.key] = currentValue.value;
    return previousValue;
  }, {});

  const result = templayed(template)(variableMap);

  return { result };
};

export default mergeTextTemplate;
