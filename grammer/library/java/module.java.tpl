package {:packageName:};
// import interpreter library
import com.nenc.interpreter.*;

/**
 * Compile nenc code and genetate a class which can be
 * used by other java class.
 */
public class {:className:} {
    public Object run() {
        Sys_ModuleFactory moduleFactory = new Sys_ModuleFactory();

        // code from nenc compiling
        {: join(concatModuleSources(moduleSources, "moduleFactory.defineModule(${{encodeString(filePath)}}, ${{code}});"), "\n") :}

        return moduleFactory.importModule("{: indexPath :}");
    }
}
