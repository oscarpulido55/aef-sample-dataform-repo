const { BigQuery } = require('@google-cloud/bigquery');

module.exports = async ({ projectConfig }) => {
  const bigqueryClient = new BigQuery({
    projectId: projectConfig.vars.dataset_projectid_landing,
  });

  const dataset = bigqueryClient.dataset(projectConfig.vars.dataset_id_landing);
  const table = dataset.table('sales');

  await table.setMetadata({
    accelerationConfig: {
      accelerationType: 'NONE',
    },
  });

  console.log('Query acceleration disabled for table:', table.id);
};