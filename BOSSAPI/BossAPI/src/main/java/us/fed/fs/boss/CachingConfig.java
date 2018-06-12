package us.fed.fs.boss;

import org.springframework.cache.CacheManager;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.cache.concurrent.ConcurrentMapCacheManager;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
@EnableCaching
public class CachingConfig {
 
    @Bean
    public CacheManager cacheManager() {
        return new ConcurrentMapCacheManager("expenses", "jobCodes", "activityCodes", "budgetObjectCodes", "expenseCodes", "paymentCodes");
    }
}
