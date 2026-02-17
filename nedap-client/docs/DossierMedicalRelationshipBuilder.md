# NedapOnsApi.DossierMedicalRelationshipBuilder

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**system** | **String** | Which code system this builder should query Can be any of CUSTOM, SNOMED, ICD-10, ICPC-1 or ICPC-2 | [optional] 
**query** | **String** | Query used to build the correct concept within the given code system. Will use the first concept within the code system that matches the query, for the best results your query should be as close as possible to a complete code from the system | [optional] 
**name** | **String** |  | [optional] 
