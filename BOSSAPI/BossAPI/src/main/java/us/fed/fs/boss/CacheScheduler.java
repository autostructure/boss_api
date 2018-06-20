package us.fed.fs.boss;

import javax.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.CacheManager;
import org.springframework.stereotype.Service;
import us.fed.fs.boss.model.ActivityCode;
import us.fed.fs.boss.model.BudgetObjectCode;
import us.fed.fs.boss.model.EmployeeProfile;
import us.fed.fs.boss.model.Expense;
import us.fed.fs.boss.model.ExpenseCode;
import us.fed.fs.boss.model.JobCode;
import us.fed.fs.boss.model.PaymentCode;
import us.fed.fs.boss.repository.ActivityCodeRepository;
import us.fed.fs.boss.repository.BudgetObjectCodeRepository;
import us.fed.fs.boss.repository.EmployeeProfileRepository;
import us.fed.fs.boss.repository.ExpenseCodeRepository;
import us.fed.fs.boss.repository.ExpenseRepository;
import us.fed.fs.boss.repository.JobCodeRepository;
import us.fed.fs.boss.repository.PaymentCodeRepository;

@Service
public class CacheScheduler {
    
    @Autowired
    ExpenseRepository expenseRepository;

    @Autowired
    JobCodeRepository jobCodeRepository;
            
    @Autowired
    ExpenseCodeRepository expenseCodeRepository;

    @Autowired
    PaymentCodeRepository paymentCodeRepository;
    
    @Autowired
    ActivityCodeRepository activityCodeRepository;
    
    @Autowired
    BudgetObjectCodeRepository budgetObjectCodeRepository;
    
    @Autowired
    EmployeeProfileRepository employeeProfileRepository;
    
    @Autowired
    CacheManager cacheManager;

    @PostConstruct
    public void init() {
        update();
        // init scheduler
    }

    public void update() {
        
        System.out.println("********************************** LOADING LOCAL CACHES ***************************************");
                    
        for (Expense expense : expenseRepository.findAll()) {
            cacheManager.getCache("expenses").put(expense.getId(), expense);
        }
        
        for (JobCode jobCode : jobCodeRepository.findAll()) {
            cacheManager.getCache("jobCodes").put(jobCode.getId(), jobCode);
        }
        
        for (ExpenseCode expenseCode : expenseCodeRepository.findAll()) {
            cacheManager.getCache("expenseCodes").put(expenseCode.getId(), expenseCode);
        }
        
        for (PaymentCode paymentCode : paymentCodeRepository.findAll()) {
            cacheManager.getCache("paymentCodes").put(paymentCode.getCode(), paymentCode);
        }
        
        for (ActivityCode activityCode : activityCodeRepository.findAll()) {
            cacheManager.getCache("activityCodes").put(activityCode.getCode(), activityCode);
        }
            
        for (BudgetObjectCode budgetObjectCode : budgetObjectCodeRepository.findAll()) {
            cacheManager.getCache("budgetObjectCodes").put(budgetObjectCode.getId(), budgetObjectCode);
        }
    
        for (EmployeeProfile employeeProfile : employeeProfileRepository.findAll()) {
            cacheManager.getCache("employeeProfiles").put(employeeProfile.getId(), employeeProfile);
        }
    }
}