package us.fed.fs.boss.reports;

import javax.servlet.ServletContext;
 
import org.springframework.http.MediaType;
 
public class FileTypeDetector {
    public static MediaType getMediaTypeForFileName(ServletContext servletContext, String fileName) {
        String mime = servletContext.getMimeType(fileName);
        try {
            MediaType mediaType = MediaType.parseMediaType(mime);
            return mediaType;
        } catch (Exception e) {
            return MediaType.APPLICATION_OCTET_STREAM;
        }
    }
     
}