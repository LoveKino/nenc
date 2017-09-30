package {:packageName:};
import java.util.HashMap;
import com.nenc.interpreter.*;

public class {:className:} {
    public Object run() {
        Sys_ModuleFactory moduleFactory = new Sys_ModuleFactory();

        {: join(concatModuleSources(moduleSources, "moduleFactory.defineModule(${{encodeString(filePath)}}, ${{code}});"), "\n") :}

        return moduleFactory.importModule("{: indexPath :}");
    }
}
