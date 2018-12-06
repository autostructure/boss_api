package gov.usda.fs.ead.boss.dto;

import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.core.JsonProcessingException;

import com.fasterxml.jackson.databind.SerializerProvider;
import com.fasterxml.jackson.databind.ser.std.StdSerializer;

import java.io.IOException;

public class EmployeeProfileMinimalSerializer extends StdSerializer<EmployeeProfileDTO> {

    public EmployeeProfileMinimalSerializer() {
        this(null);
    }

    public EmployeeProfileMinimalSerializer(Class<EmployeeProfileDTO> t) {
        super(t);
    }

    @Override
    public void serialize(
            EmployeeProfileDTO item,
            JsonGenerator generator,
            SerializerProvider provider)
            throws IOException, JsonProcessingException {
        EmployeeProfileMinimal sup = new EmployeeProfileMinimal(item.getId(), item.getNameCode());
        generator.writeObject(sup);
    }

}
