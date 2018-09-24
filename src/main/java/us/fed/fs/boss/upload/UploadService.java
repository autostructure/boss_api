package us.fed.fs.boss.upload;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.concurrent.CompletableFuture;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;
import us.fed.fs.boss.model.UploadedDocument;
import us.fed.fs.boss.repository.UploadedDocumentRepository;

@Service
public class UploadService {

    @Autowired
    UploadedDocumentRepository uploadedDocumentRepository;

    @Async
    public CompletableFuture<Long> upload(File f, String docType, String fileType) throws InterruptedException, IOException {
        
        
        UploadedDocument doc = new UploadedDocument();
        doc.setData(readFileToByteArray(f));
        doc.setDocType(docType);
        doc.setFileType(fileType);
        doc.setName(f.getName());
        
        System.out.println("upload " + f.getName());
        System.out.println("upload");
        System.out.println("upload");
        System.out.println("upload");
        System.out.println("upload");
        
        uploadedDocumentRepository.save(doc);
        
        System.out.println("uploaded");
        System.out.println("uploaded");
        System.out.println("uploaded");
        System.out.println("uploaded");
        System.out.println("uploaded");
        
        f.delete();
        
        return CompletableFuture.completedFuture(doc.getId());
    }

    @Async
    public CompletableFuture<UploadedDocument> getUploadedDocument(long fileId) throws InterruptedException {
        UploadedDocument doc = uploadedDocumentRepository.getOne(fileId);
        return CompletableFuture.completedFuture(doc);
    }

    private static byte[] readFileToByteArray(File f) throws FileNotFoundException, IOException {
        byte[] data = new byte[(int) f.length()];
        try (FileInputStream fis = new FileInputStream(f)) {
            fis.read(data);
        }
        return data;
    }

}
