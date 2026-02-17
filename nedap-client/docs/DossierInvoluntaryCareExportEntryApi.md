# NedapOnsApi.DossierInvoluntaryCareExportEntryApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**dossierInvoluntaryCareExportEntryAPIEntries**](DossierInvoluntaryCareExportEntryApi.md#dossierInvoluntaryCareExportEntryAPIEntries) | **GET** /v0/dossier/back_channel/unauthorized/involuntary_care_export/entries | Get the involuntary care export entries for given parameters.

<a name="dossierInvoluntaryCareExportEntryAPIEntries"></a>
# **dossierInvoluntaryCareExportEntryAPIEntries**
> DossierListInvoluntaryCareExportEntryList dossierInvoluntaryCareExportEntryAPIEntries(opts)

Get the involuntary care export entries for given parameters.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierInvoluntaryCareExportEntryApi();
let opts = { 
  'law': 56, // Number | the law for which to get the involuntary care entries: 1 (Wzd) or 2 (Wvggz)
  'start': new Date("2013-10-20"), // Date | the start date of the export
  'end': new Date("2013-10-20") // Date | the end date of the export
};
apiInstance.dossierInvoluntaryCareExportEntryAPIEntries(opts, (error, data, response) => {
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
 **law** | **Number**| the law for which to get the involuntary care entries: 1 (Wzd) or 2 (Wvggz) | [optional] 
 **start** | **Date**| the start date of the export | [optional] 
 **end** | **Date**| the end date of the export | [optional] 

### Return type

[**DossierListInvoluntaryCareExportEntryList**](DossierListInvoluntaryCareExportEntryList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

