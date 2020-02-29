export class CompileStringService {

    compileResult;
    CompileString(expr: string) {
        this.compileResult = eval(expr);
        
        console.log("compileResult: ", this.compileResult);

    }
}