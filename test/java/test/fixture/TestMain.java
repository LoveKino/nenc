import com.nenc.auto.test.Test;
import java.util.HashMap;

public class TestMain {
    public static void main(String[] argv) throws Exception {
        Test test = new Test();
        Object result = test.run();
        // expected json
        HashMap<String, Object> t0 = new HashMap<String, Object>();
HashMap<String, Object> t1 = new HashMap<String, Object>();
t0.put("a", t1);
HashMap<String, Object> t2 = new HashMap<String, Object>();
t1.put("b", t2);
Object[] t3 = new Object[3];
t2.put("c", t3);
double t4 = 3;
t3[2] = t4;
double t5 = 2;
t3[1] = t5;
double t6 = 1;
t3[0] = t6;
        // compare result and expectation
        assertJsonEqual(result, t0);
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
            if(real != expect) {
                throw new Exception(notEqualString(real, expect));
            }
        } else if(real instanceof String) {
            if(!(expect instanceof String)) {
                throw new Exception(notEqualString(real, expect));
            }
            if(real != expect) {
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
