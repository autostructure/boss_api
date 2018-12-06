package gov.usda.fs.ead.boss.dto;

import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.SerializerProvider;
import com.fasterxml.jackson.databind.ser.std.StdSerializer;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

public class EmployeeProfileListMinimalSerializer extends StdSerializer<List<EmployeeProfileDTO>> {

    public EmployeeProfileListMinimalSerializer() {
        this(null);
    }

    public EmployeeProfileListMinimalSerializer(Class<List<EmployeeProfileDTO>> t) {
        super(t);
    }

    @Override
    public void serialize(
            List<EmployeeProfileDTO> items,
            JsonGenerator generator,
            SerializerProvider provider)
            throws IOException, JsonProcessingException {

        List<EmployeeProfileMinimal> supes = new ArrayList<>();

        items.forEach(
                (item) -> {
                    supes.add(new EmployeeProfileMinimal(item.getId(), item.getFsEmail()));
                }
        );

        generator.writeObject(supes);

    }

}
