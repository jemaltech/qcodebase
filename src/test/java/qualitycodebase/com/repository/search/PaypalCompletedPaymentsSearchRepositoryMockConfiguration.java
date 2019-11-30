package qualitycodebase.com.repository.search;

import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.context.annotation.Configuration;

/**
 * Configure a Mock version of {@link PaypalCompletedPaymentsSearchRepository} to test the
 * application without starting Elasticsearch.
 */
@Configuration
public class PaypalCompletedPaymentsSearchRepositoryMockConfiguration {

    @MockBean
    private PaypalCompletedPaymentsSearchRepository mockPaypalCompletedPaymentsSearchRepository;

}
