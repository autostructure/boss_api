package us.fed.fs.boss.model;

import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.core.JsonProcessingException;

import com.fasterxml.jackson.databind.SerializerProvider;
import com.fasterxml.jackson.databind.ser.std.StdSerializer;

import java.io.IOException;

public class EmployeeProfileMinimalSerializer extends StdSerializer<EmployeeProfile> {

    public EmployeeProfileMinimalSerializer() {
        this(null);
    }

    public EmployeeProfileMinimalSerializer(Class<EmployeeProfile> t) {
        super(t);
    }

    @Override
    public void serialize(
            EmployeeProfile item,
            JsonGenerator generator,
            SerializerProvider provider)
            throws IOException, JsonProcessingException {
        Supervisor sup = new Supervisor(item.getId(), item.getNameCode());
        generator.writeObject(sup);
    }

}
