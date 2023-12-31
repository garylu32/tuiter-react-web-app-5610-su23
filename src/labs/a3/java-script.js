import VariablesAndConstants from "./variables-and-constants";
import VariableTypes from "./variable-types";
import BooleanVariables from "./boolean-variables";
import IfElse from "./if-else";
import TernaryOperator from "./ternary-operator";
import Es5Functions from "./es5-functions";
import ArrowFunctions from "./arrow-functions";
import ImpliedReturn from "./implied-return";
import FunctionParenthesisAndParameters
  from "./function-parenthesis-and-parameters";
import WorkingWithArrays from "./working-with-arrays";
import TemplateLiterals from "./template-literals";
import House from "./House";
import Spread from "./spread";
import Destructing from "./destructing";
import FunctionDestructing from "./function-destructing";



function JavaScript() {
  console.log("Hello World!");
  return(
      <div>
        <h1>JavaScript</h1>
        <VariablesAndConstants/>
        <VariableTypes/>
        <BooleanVariables/>
        <IfElse/>
        <TernaryOperator/>
        <Es5Functions/>
        <ArrowFunctions/>
        <ImpliedReturn/>
        <FunctionParenthesisAndParameters/>
        <WorkingWithArrays/>
        <TemplateLiterals/>
        <House/>
        <Spread/>
        <Destructing/>
        <FunctionDestructing/>
      </div>
  );
};

export default JavaScript;
