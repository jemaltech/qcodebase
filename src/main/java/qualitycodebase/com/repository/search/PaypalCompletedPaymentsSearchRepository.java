package qualitycodebase.com.repository.search;
import qualitycodebase.com.domain.PaypalCompletedPayments;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data Elasticsearch repository for the {@link PaypalCompletedPayments} entity.
 */
public interface PaypalCompletedPaymentsSearchRepository extends ElasticsearchRepository<PaypalCompletedPayments, Long> {
}
