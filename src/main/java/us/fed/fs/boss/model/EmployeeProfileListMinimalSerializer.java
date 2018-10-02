package us.fed.fs.boss.model;

import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.SerializerProvider;
import com.fasterxml.jackson.databind.ser.std.StdSerializer;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

public class EmployeeProfileListMinimalSerializer extends StdSerializer<List<EmployeeProfile>> {

    public EmployeeProfileListMinimalSerializer() {
        this(null);
    }

    public EmployeeProfileListMinimalSerializer(Class<List<EmployeeProfile>> t) {
        super(t);
    }

    @Override
    public void serialize(
            List<EmployeeProfile> items,
            JsonGenerator generator,
            SerializerProvider provider)
            throws IOException, JsonProcessingException {

        List<Supervisor> supes = new ArrayList<>();

        items.forEach(
                (item) -> {
                    supes.add(new Supervisor(item.getId(), item.getNameCode()));
                }
        );

        generator.writeObject(supes);

    }

}
