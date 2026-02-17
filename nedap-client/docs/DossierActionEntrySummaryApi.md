# NedapOnsApi.DossierActionEntrySummaryApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**dossierActionEntrySummaryAPILastByPersistentIds**](DossierActionEntrySummaryApi.md#dossierActionEntrySummaryAPILastByPersistentIds) | **GET** /v0/dossier/back_channel/unauthorized/action_entry_summaries/last_by_persistent_ids | Return the latest ActionEntrySummaries corresponding to the given persistentIds.

<a name="dossierActionEntrySummaryAPILastByPersistentIds"></a>
# **dossierActionEntrySummaryAPILastByPersistentIds**
> DossierListActionEntrySummaryList dossierActionEntrySummaryAPILastByPersistentIds(persistentIds)

Return the latest ActionEntrySummaries corresponding to the given persistentIds.

Return the latest action entry summaries by the given persistent ids.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierActionEntrySummaryApi();
let persistentIds = [3.4]; // [Number] | List of ids

apiInstance.dossierActionEntrySummaryAPILastByPersistentIds(persistentIds, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **persistentIds** | [**[Number]**](Number.md)| List of ids | 

### Return type

[**DossierListActionEntrySummaryList**](DossierListActionEntrySummaryList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

