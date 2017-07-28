package {:packageName:};
import java.util.HashMap;
import com.nenc.interpreter.*;

public class {:className:} {
    public Object run() {
        Interpreter interpreter = new Interpreter();

        {: join(concatModuleSources(moduleSources, "{${{code}}interpreter.defineModule(${{encodeString(filePath)}}, t0);}"), "\n") :}

        return interpreter.runProgram("{: indexPath :}");
    }
}
