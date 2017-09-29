import com.nenc.auto.test.Test;
import java.util.HashMap;

public class TestMain {
    public static void main(String[] argv) throws Exception {
        Test test = new Test();
        Object result = test.run();
        // expected json
        Object[] t0 = new Object[2];
double t1 = 4;
t0[1] = t1;
double t2 = 2;
t0[0] = t2;
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
