package {:packageName:};
// import interpreter library
import com.nenc.interpreter.*;

public class {:className:} {
    public static void main(String[] args) {
        Sys_ModuleFactory moduleFactory = new Sys_ModuleFactory();

        // code from nenc compiling
        {: join(concatModuleSources(moduleSources, "moduleFactory.defineModule(${{encodeString(filePath)}}, ${{code}});"), "\n") :}

        moduleFactory.importModule("{: indexPath :}");
    }
}
