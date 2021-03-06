package gov.usda.fs.ead.boss.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import gov.usda.fs.ead.boss.model.UploadedDocument;

public interface UploadedDocumentRepository extends JpaRepository<UploadedDocument, Long> {

    @Override
    public <S extends UploadedDocument> S save(S entity);

    @Override
    public List<UploadedDocument> findAll();

    @Override
    public void delete(UploadedDocument profilePicture);

    public List<UploadedDocument> findByFileTypeAndDocType(String fileType, String docType);

    public List<UploadedDocument> findByDocType(String docType);

}
