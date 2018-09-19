package us.fed.fs.boss.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import us.fed.fs.boss.model.ProfilePicture;

public interface ProfilePictureRepository  extends JpaRepository<ProfilePicture, Long> {

    @Override
    public <S extends ProfilePicture> S save(S entity);

    @Override
    public List<ProfilePicture> findAll();

    @Override
    public void delete(ProfilePicture profilePicture);
    
}
