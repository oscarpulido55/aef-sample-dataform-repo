## Dataform Repository
  - Houses your table definitions using a structure recommended for Dataform repositories.
  - Use the `dataform.json` file to provide parameters to be referenced by your `*.sqlx files` during Dataform operations.
```
├── dataform
│   └── definitions
│   │    └── landing_dataset
│   │        ├── raw_products.sqlx
│   │        └── ...
│   └── dataform.json
```

## Using this Datafrom repository with aef-data-model

- Define datasets in the `dataform.json` variables, if this repository is referenced, this parameters will be read by aef-data-model during terraform apply to create the datasets defined here.
- It should include 3 variables for each dataset with next format:
```json lines
{
  "defaultSchema": "default_dataset",
  "assertionSchema": "dataform_assertions",
  "defaultLocation": "<REGION>",
  "warehouse": "bigquery",
  "defaultDatabase": "<PROJECT>",
  "vars": {
    "dataset_id_<DATASET_IDENTIFIER>":"<DATASET_NAME>",
    "dataset_projectid_<DATASET_IDENTIFIER>":"DATASET_PROJECT>",
    "dataset_location_<DATASET_IDENTIFIER>":"<DATASET_LOCATION>",
    ...
  }
}
```