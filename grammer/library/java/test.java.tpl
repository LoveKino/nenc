package {:packageName:};
import java.util.HashMap;
// import interpreter library
import com.nenc.interpreter.*;

public class {:className:} {
    public static void main(String[] argv) throws Exception {
        Sys_ModuleFactory moduleFactory = new Sys_ModuleFactory();

        // code from nenc compiling
        {: join(concatModuleSources(moduleSources, "moduleFactory.defineModule(${{encodeString(filePath)}}, ${{code}});"), "\n") :}

        Object result = moduleFactory.importModule("{: indexPath :}");

        // compare result and expectation
        assertJsonEqual(result, {: expect :});
    }

    public static HashMap<String, Object> listToObject(Object[] list) {
        HashMap<String, Object> result = new HashMap<String, Object> ();
        int i = 0;
        while(i < list.length - 1) {
            String key = (String)list[i];
            i++;
            Object value = list[i];
            result.put(key, value);
        }
        return result;
    }

    public static void assertJsonEqual(Object real, Object expect) throws Exception {
        if(real == null) {
            if(expect != null) {
                throw new Exception(notEqualString(real, expect));
            }
        }
        else if(real instanceof Double) {
            if(!(expect instanceof Double)) {
                throw new Exception(notEqualString(real, expect));
            }
            if(!expect.equals(real)) {
                throw new Exception(notEqualString(real, expect));
            }
        } else if(real instanceof String) {
            if(!(expect instanceof String)) {
                throw new Exception(notEqualString(real, expect));
            }
            if(!expect.equals(real)) {
                throw new Exception(notEqualString(real, expect));
            }
        } else if(real instanceof Object[]) {
            if(!(expect instanceof Object[])) {
                throw new Exception(notEqualString(real, expect));
            }
            Object[] realArr = (Object[]) real;
            Object[] expectArr = (Object[]) expect;
            //
            if(realArr.length != expectArr.length) {
                throw new Exception(notEqualString(realArr, expectArr));
            } else {
                for(int i = 0; i < realArr.length; i++) {
                    assertJsonEqual(realArr[i], expectArr[i]);
                }
            }
        } else if(real instanceof HashMap) {
            if(!(expect instanceof HashMap)) {
                throw new Exception(notEqualString(real, expect));
            }
            // TODO
        }
    }

    private static String notEqualString(Object real, Object expect) {
        return "real is not equal to expect. real is " + real + ", expect is " + expect;
    }
}
