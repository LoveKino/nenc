import com.nenc.auto.test.Test;

public class TestMain {
    public static void main(String[] argv) {
        Test test = new Test();
        Object result = test.run();
        System.out.println("_-------______--------______-");
        System.out.println(result);
        throw new Error("Error");
    }
}
