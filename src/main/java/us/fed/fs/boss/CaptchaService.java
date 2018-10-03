package us.fed.fs.boss;

import java.awt.Color;
import java.awt.Font;
import java.awt.Graphics2D;
import java.awt.RenderingHints;
import java.awt.image.BufferedImage;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.Random;
import java.util.concurrent.CompletableFuture;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.imageio.ImageIO;
import org.apache.commons.lang3.ArrayUtils;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

@Service
public class CaptchaService {

    @Async
    public CompletableFuture<byte[]> getCaptchaImageBytes(String text) {

        int w = 180, h = 40;
        BufferedImage image = new BufferedImage(w, h, BufferedImage.TYPE_INT_RGB);
        Graphics2D g = image.createGraphics();
        g.setRenderingHint(RenderingHints.KEY_FRACTIONALMETRICS, RenderingHints.VALUE_FRACTIONALMETRICS_ON);
        g.setRenderingHint(RenderingHints.KEY_TEXT_ANTIALIASING, RenderingHints.VALUE_TEXT_ANTIALIAS_ON);

        g.setColor(Color.white);
        g.fillRect(0, 0, w, h);
        g.setFont(new Font("Serif", Font.PLAIN, 26));
        g.setColor(Color.blue);
        int start = 10;
        byte[] bytes = text.getBytes();

        Random random = new Random();
        for (int i = 0; i < bytes.length; i++) {
            g.setColor(new Color(random.nextInt(255), random.nextInt(255), random.nextInt(255)));
            g.drawString(new String(new byte[]{bytes[i]}), start + (i * 20), (int) (Math.random() * 20 + 20));
        }
        g.setColor(Color.white);
        for (int i = 0; i < 8; i++) {
            g.drawOval((int) (Math.random() * 160), (int) (Math.random() * 10), 30, 30);
        }
        g.dispose();

        byte[] imgBytes = {};
        try (ByteArrayOutputStream bout = new ByteArrayOutputStream()) {
            ImageIO.write(image, "png", bout);
            imgBytes = bout.toByteArray();
        } catch (IOException ex) {
            Logger.getLogger(CaptchaService.class.getName()).log(Level.SEVERE, null, ex);
        }

        return CompletableFuture.completedFuture(imgBytes);
        
    }

}
