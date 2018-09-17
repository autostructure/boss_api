package us.fed.fs.boss.model;

import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.SerializerProvider;
import com.fasterxml.jackson.databind.ser.std.StdSerializer;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

public class EmployeeProfileAdminSerializer extends StdSerializer<List<EmployeeProfile>>{
 
     public EmployeeProfileAdminSerializer() {
        this(null);
    }
 
    public EmployeeProfileAdminSerializer(Class<List<EmployeeProfile>> t) {
        super(t);
    }
 
    @Override
    public void serialize(
      List<EmployeeProfile> items, 
      JsonGenerator generator, 
      SerializerProvider provider) 
      throws IOException, JsonProcessingException {
        
        List<Supervisor> supes = new ArrayList<>();
         
        for (EmployeeProfile item : items) {
            supes.add(new Supervisor(item.getId(), item.getNameCode()));
        }
        generator.writeObject(supes);
    }
    
    private class Supervisor {
        private Long id;
        private String nameCode;
        
        public Supervisor(Long id, String nameCode) {
            this.id = id;
            this.nameCode = nameCode;
        }

        /**
         * @return the id
         */
        public Long getId() {
            return id;
        }

        /**
         * @param id the id to set
         */
        public void setId(Long id) {
            this.id = id;
        }

        /**
         * @return the nameCode
         */
        public String getNameCode() {
            return nameCode;
        }

        /**
         * @param nameCode the nameCode to set
         */
        public void setNameCode(String nameCode) {
            this.nameCode = nameCode;
        }
    }
}