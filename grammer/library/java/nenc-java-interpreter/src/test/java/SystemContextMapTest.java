import com.nenc.interpreter.SystemContextMap;
import org.junit.Test;

public class SystemContextMapTest {
    @Test
    public void testToBool() {
        assert !SystemContextMap.toBool(0);
        assert !SystemContextMap.toBool(new Double(0));

        assert !SystemContextMap.toBool(7.0005 - 7.0005);

        assert SystemContextMap.toBool(2);
        assert SystemContextMap.toBool(2.0);

        assert !SystemContextMap.toBool("");
        assert SystemContextMap.toBool("123");

        assert !SystemContextMap.toBool(false);
        assert SystemContextMap.toBool(true);

        assert new Double(3).equals(new Double(3.0));

    }
}
