# NedapOnsApi.OpenehrCompositionWrapperApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**openehrCompositionWrapperAPIAll**](OpenehrCompositionWrapperApi.md#openehrCompositionWrapperAPIAll) | **GET** /v0/openehr_dossier/back_channel/unauthorized/composition_wrappers | Finds all CompositionWrappers of all clients that are an instance of the given archetypeId.
[**openehrCompositionWrapperAPIById**](OpenehrCompositionWrapperApi.md#openehrCompositionWrapperAPIById) | **GET** /v0/openehr_dossier/back_channel/unauthorized/composition_wrappers/{id} | Finds a compositionWrapper in the requested form
[**openehrCompositionWrapperAPIByVvtCareProfileCareplanId**](OpenehrCompositionWrapperApi.md#openehrCompositionWrapperAPIByVvtCareProfileCareplanId) | **GET** /v0/openehr_dossier/back_channel/unauthorized/vvt_care_profiles/{careplan_id} | Finds a VVT care profile compositionWrapper in the requested form
[**openehrCompositionWrapperAPICompositionVersions**](OpenehrCompositionWrapperApi.md#openehrCompositionWrapperAPICompositionVersions) | **GET** /v0/openehr_dossier/back_channel/unauthorized/composition_wrappers/{id}/composition_versions | Finds all CompositionVersionWrappers of a given composition.
[**openehrCompositionWrapperAPICopyVvtCareProfile**](OpenehrCompositionWrapperApi.md#openehrCompositionWrapperAPICopyVvtCareProfile) | **POST** /v0/openehr_dossier/back_channel/unauthorized/vvt_care_profiles/{careplan_id}/copy | Copies a VVT care profile compositionWrapper to a new careplan.
[**openehrCompositionWrapperAPICreateV2**](OpenehrCompositionWrapperApi.md#openehrCompositionWrapperAPICreateV2) | **POST** /v0/openehr_dossier/back_channel/unauthorized/composition_wrappers | Create CompositionWrapper
[**openehrCompositionWrapperAPIDelete**](OpenehrCompositionWrapperApi.md#openehrCompositionWrapperAPIDelete) | **DELETE** /v0/openehr_dossier/back_channel/unauthorized/composition_wrappers/{id} | Deletes the CompositionWrapper with given id
[**openehrCompositionWrapperAPIDeleteMultiple**](OpenehrCompositionWrapperApi.md#openehrCompositionWrapperAPIDeleteMultiple) | **DELETE** /v0/openehr_dossier/back_channel/unauthorized/composition_wrappers | Deletes multiple Compositions by given id&#x27;s
[**openehrCompositionWrapperAPIEvaluate**](OpenehrCompositionWrapperApi.md#openehrCompositionWrapperAPIEvaluate) | **POST** /v0/openehr_dossier/back_channel/unauthorized/composition_wrappers/evaluate | Posts a compositionWrapper and returns the ruleEvaluation.
[**openehrCompositionWrapperAPIExportToXLSX**](OpenehrCompositionWrapperApi.md#openehrCompositionWrapperAPIExportToXLSX) | **GET** /v0/openehr_dossier/back_channel/unauthorized/composition_wrappers/export_to_xlsx | Returns an XLSX file with the content of all compositions within a clients ehr as stream of bytes
[**openehrCompositionWrapperAPIIncomingLinks**](OpenehrCompositionWrapperApi.md#openehrCompositionWrapperAPIIncomingLinks) | **GET** /v0/openehr_dossier/back_channel/unauthorized/composition_wrappers/{id}/incoming_links | Finds all reference model objects linking to given composition that are an instance of the given archetypeIds.
[**openehrCompositionWrapperAPISelectedValues**](OpenehrCompositionWrapperApi.md#openehrCompositionWrapperAPISelectedValues) | **POST** /v0/openehr_dossier/back_channel/unauthorized/composition_wrappers/selected_values | Query composition data by archetype and path
[**openehrCompositionWrapperAPIUpdateV2**](OpenehrCompositionWrapperApi.md#openehrCompositionWrapperAPIUpdateV2) | **PUT** /v0/openehr_dossier/back_channel/unauthorized/composition_wrappers/{id} | Updates the given CompositionWrapper

<a name="openehrCompositionWrapperAPIAll"></a>
# **openehrCompositionWrapperAPIAll**
> OpenehrListCompositionWrapperList openehrCompositionWrapperAPIAll(referenceModelObjectForm, opts)

Finds all CompositionWrappers of all clients that are an instance of the given archetypeId.

This API supports pagination by using limit, and by default will only return the 20 most recent results.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.OpenehrCompositionWrapperApi();
let referenceModelObjectForm = new NedapOnsApi.OpenehrReferenceModelObjectForm(); // OpenehrReferenceModelObjectForm | The requested form of the compositions. The options are: * **METADATA**: Return only the metadata. `referenceModelObject` and `pathsAndValues` will be empty. * **PATHS_AND_VALUES**: Return the `pathsAndValues`. `referenceModelObject` will be empty. * **RM_OBJECT**: Return the `referenceModelObject` in the older Nedap specific JSON format. Matches `ArchieJacksonConfiguration.createLegacyConfiguration` in the Archie library. `pathsAndValues` will be empty. * **RM_OBJECT_STANDARDS_COMPLIANT_JSON**: Return the `referenceModelObject` compliant with the openEHR JSON specification. Matches `ArchieJacksonConfiguration.createStandardsCompliant` in the Archie library. `pathsAndValues` will be empty.
let opts = { 
  'clientId': 789, // Number | The client id
  'archetypeId': "archetypeId_example", // String | Id of the archetype that the requested compositions should be an instance of
  'withIncomplete': true, // Boolean | Set to true to also include compositions with lifecycleState INCOMPLETE. By default only compositions with lifecycleState COMPLETE are included.
  'limit': 56, // Number | Limits the number of results returned
  'offset': 56, // Number | Offsets the number of records of the first result.
  'validFrom': new Date("2013-10-20"), // Date | Starting time
  'validTo': new Date("2013-10-20"), // Date | End time
  'updatedSince': "updatedSince_example", // String | Fetch only the compositions that were updated on or after the given date
  'itemTagKey': ["itemTagKey_example"], // [String] | Fetch only the compositions associated with any of the provided item tag keys
  'moduleUuid': ["moduleUuid_example"], // [String] | UUID's of modules that the archetypes of the requested compositions should belong to
  'withAbandoned': true, // Boolean | Set to true to also include compositions with lifecycleState ABANDONED. By default only compositions with lifecycleState COMPLETE are included.
  'withInactive': true // Boolean | Set to true to also include compositions with lifecycleState INACTIVE. By default only compositions with lifecycleState COMPLETE are included.
};
apiInstance.openehrCompositionWrapperAPIAll(referenceModelObjectForm, opts, (error, data, response) => {
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
 **referenceModelObjectForm** | [**OpenehrReferenceModelObjectForm**](.md)| The requested form of the compositions. The options are: * **METADATA**: Return only the metadata. &#x60;referenceModelObject&#x60; and &#x60;pathsAndValues&#x60; will be empty. * **PATHS_AND_VALUES**: Return the &#x60;pathsAndValues&#x60;. &#x60;referenceModelObject&#x60; will be empty. * **RM_OBJECT**: Return the &#x60;referenceModelObject&#x60; in the older Nedap specific JSON format. Matches &#x60;ArchieJacksonConfiguration.createLegacyConfiguration&#x60; in the Archie library. &#x60;pathsAndValues&#x60; will be empty. * **RM_OBJECT_STANDARDS_COMPLIANT_JSON**: Return the &#x60;referenceModelObject&#x60; compliant with the openEHR JSON specification. Matches &#x60;ArchieJacksonConfiguration.createStandardsCompliant&#x60; in the Archie library. &#x60;pathsAndValues&#x60; will be empty. | 
 **clientId** | **Number**| The client id | [optional] 
 **archetypeId** | **String**| Id of the archetype that the requested compositions should be an instance of | [optional] 
 **withIncomplete** | **Boolean**| Set to true to also include compositions with lifecycleState INCOMPLETE. By default only compositions with lifecycleState COMPLETE are included. | [optional] 
 **limit** | **Number**| Limits the number of results returned | [optional] 
 **offset** | **Number**| Offsets the number of records of the first result. | [optional] 
 **validFrom** | **Date**| Starting time | [optional] 
 **validTo** | **Date**| End time | [optional] 
 **updatedSince** | **String**| Fetch only the compositions that were updated on or after the given date | [optional] 
 **itemTagKey** | [**[String]**](String.md)| Fetch only the compositions associated with any of the provided item tag keys | [optional] 
 **moduleUuid** | [**[String]**](String.md)| UUID&#x27;s of modules that the archetypes of the requested compositions should belong to | [optional] 
 **withAbandoned** | **Boolean**| Set to true to also include compositions with lifecycleState ABANDONED. By default only compositions with lifecycleState COMPLETE are included. | [optional] 
 **withInactive** | **Boolean**| Set to true to also include compositions with lifecycleState INACTIVE. By default only compositions with lifecycleState COMPLETE are included. | [optional] 

### Return type

[**OpenehrListCompositionWrapperList**](OpenehrListCompositionWrapperList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="openehrCompositionWrapperAPIById"></a>
# **openehrCompositionWrapperAPIById**
> OpenehrCompositionWrapper openehrCompositionWrapperAPIById(id, referenceModelObjectForm)

Finds a compositionWrapper in the requested form

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.OpenehrCompositionWrapperApi();
let id = 789; // Number | The id of the composition
let referenceModelObjectForm = new NedapOnsApi.OpenehrReferenceModelObjectForm(); // OpenehrReferenceModelObjectForm | The requested form of the composition. The options are: * **METADATA**: Return only the metadata. `referenceModelObject` and `pathsAndValues` will be empty. * **PATHS_AND_VALUES**: Return the `pathsAndValues`. `referenceModelObject` will be empty. * **RM_OBJECT**: Return the `referenceModelObject` in the older Nedap specific JSON format. Matches `ArchieJacksonConfiguration.createLegacyConfiguration` in the Archie library. `pathsAndValues` will be empty. * **RM_OBJECT_STANDARDS_COMPLIANT_JSON**: Return the `referenceModelObject` compliant with the openEHR JSON specification. Matches `ArchieJacksonConfiguration.createStandardsCompliant` in the Archie library. `pathsAndValues` will be empty.

apiInstance.openehrCompositionWrapperAPIById(id, referenceModelObjectForm, (error, data, response) => {
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
 **id** | **Number**| The id of the composition | 
 **referenceModelObjectForm** | [**OpenehrReferenceModelObjectForm**](.md)| The requested form of the composition. The options are: * **METADATA**: Return only the metadata. &#x60;referenceModelObject&#x60; and &#x60;pathsAndValues&#x60; will be empty. * **PATHS_AND_VALUES**: Return the &#x60;pathsAndValues&#x60;. &#x60;referenceModelObject&#x60; will be empty. * **RM_OBJECT**: Return the &#x60;referenceModelObject&#x60; in the older Nedap specific JSON format. Matches &#x60;ArchieJacksonConfiguration.createLegacyConfiguration&#x60; in the Archie library. &#x60;pathsAndValues&#x60; will be empty. * **RM_OBJECT_STANDARDS_COMPLIANT_JSON**: Return the &#x60;referenceModelObject&#x60; compliant with the openEHR JSON specification. Matches &#x60;ArchieJacksonConfiguration.createStandardsCompliant&#x60; in the Archie library. &#x60;pathsAndValues&#x60; will be empty. | 

### Return type

[**OpenehrCompositionWrapper**](OpenehrCompositionWrapper.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="openehrCompositionWrapperAPIByVvtCareProfileCareplanId"></a>
# **openehrCompositionWrapperAPIByVvtCareProfileCareplanId**
> OpenehrCompositionWrapper openehrCompositionWrapperAPIByVvtCareProfileCareplanId(careplanId, referenceModelObjectForm)

Finds a VVT care profile compositionWrapper in the requested form

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.OpenehrCompositionWrapperApi();
let careplanId = 789; // Number | The id of the careplan for which to request the vvt care profile
let referenceModelObjectForm = new NedapOnsApi.OpenehrReferenceModelObjectForm(); // OpenehrReferenceModelObjectForm | The requested form of the vvt care profile composition. The options are: * **METADATA**: Return only the metadata. `referenceModelObject` and `pathsAndValues` will be empty. * **PATHS_AND_VALUES**: Return the `pathsAndValues`. `referenceModelObject` will be empty. * **RM_OBJECT**: Return the `referenceModelObject` in the older Nedap specific JSON format. Matches `ArchieJacksonConfiguration.createLegacyConfiguration` in the Archie library. `pathsAndValues` will be empty. * **RM_OBJECT_STANDARDS_COMPLIANT_JSON**: Return the `referenceModelObject` compliant with the openEHR JSON specification. Matches `ArchieJacksonConfiguration.createStandardsCompliant` in the Archie library. `pathsAndValues` will be empty.

apiInstance.openehrCompositionWrapperAPIByVvtCareProfileCareplanId(careplanId, referenceModelObjectForm, (error, data, response) => {
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
 **careplanId** | **Number**| The id of the careplan for which to request the vvt care profile | 
 **referenceModelObjectForm** | [**OpenehrReferenceModelObjectForm**](.md)| The requested form of the vvt care profile composition. The options are: * **METADATA**: Return only the metadata. &#x60;referenceModelObject&#x60; and &#x60;pathsAndValues&#x60; will be empty. * **PATHS_AND_VALUES**: Return the &#x60;pathsAndValues&#x60;. &#x60;referenceModelObject&#x60; will be empty. * **RM_OBJECT**: Return the &#x60;referenceModelObject&#x60; in the older Nedap specific JSON format. Matches &#x60;ArchieJacksonConfiguration.createLegacyConfiguration&#x60; in the Archie library. &#x60;pathsAndValues&#x60; will be empty. * **RM_OBJECT_STANDARDS_COMPLIANT_JSON**: Return the &#x60;referenceModelObject&#x60; compliant with the openEHR JSON specification. Matches &#x60;ArchieJacksonConfiguration.createStandardsCompliant&#x60; in the Archie library. &#x60;pathsAndValues&#x60; will be empty. | 

### Return type

[**OpenehrCompositionWrapper**](OpenehrCompositionWrapper.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="openehrCompositionWrapperAPICompositionVersions"></a>
# **openehrCompositionWrapperAPICompositionVersions**
> OpenehrListCompositionVersionWrapperList openehrCompositionWrapperAPICompositionVersions(id, referenceModelObjectForm, opts)

Finds all CompositionVersionWrappers of a given composition.

Finds all {@link CompositionVersionWrapper}s of a given composition. Contains logic for both authorized and non-authorized API usage. This API supports pogination by using limit and offset. By default will only the 20 most recent results.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.OpenehrCompositionWrapperApi();
let id = 789; // Number | The id of the composition
let referenceModelObjectForm = new NedapOnsApi.OpenehrReferenceModelObjectForm(); // OpenehrReferenceModelObjectForm | The requested form of the composition. The options are: * **METADATA**: Return only the metadata. `referenceModelObject` and `pathsAndValues` will be empty. * **PATHS_AND_VALUES**: Return the `pathsAndValues`. `referenceModelObject` will be empty. * **RM_OBJECT**: Return the `referenceModelObject` in the older Nedap specific JSON format. Matches `ArchieJacksonConfiguration.createLegacyConfiguration` in the Archie library. `pathsAndValues` will be empty. * **RM_OBJECT_STANDARDS_COMPLIANT_JSON**: Return the `referenceModelObject` compliant with the openEHR JSON specification. Matches `ArchieJacksonConfiguration.createStandardsCompliant` in the Archie library. `pathsAndValues` will be empty.
let opts = { 
  'limit': 20, // Number | The amount of {@link CompositionVersionWrapper}s should be returned
  'offset': 56, // Number | Offsets the number of records of the first result
  'clientId': 789 // Number | The client id
};
apiInstance.openehrCompositionWrapperAPICompositionVersions(id, referenceModelObjectForm, opts, (error, data, response) => {
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
 **id** | **Number**| The id of the composition | 
 **referenceModelObjectForm** | [**OpenehrReferenceModelObjectForm**](.md)| The requested form of the composition. The options are: * **METADATA**: Return only the metadata. &#x60;referenceModelObject&#x60; and &#x60;pathsAndValues&#x60; will be empty. * **PATHS_AND_VALUES**: Return the &#x60;pathsAndValues&#x60;. &#x60;referenceModelObject&#x60; will be empty. * **RM_OBJECT**: Return the &#x60;referenceModelObject&#x60; in the older Nedap specific JSON format. Matches &#x60;ArchieJacksonConfiguration.createLegacyConfiguration&#x60; in the Archie library. &#x60;pathsAndValues&#x60; will be empty. * **RM_OBJECT_STANDARDS_COMPLIANT_JSON**: Return the &#x60;referenceModelObject&#x60; compliant with the openEHR JSON specification. Matches &#x60;ArchieJacksonConfiguration.createStandardsCompliant&#x60; in the Archie library. &#x60;pathsAndValues&#x60; will be empty. | 
 **limit** | **Number**| The amount of {@link CompositionVersionWrapper}s should be returned | [optional] [default to 20]
 **offset** | **Number**| Offsets the number of records of the first result | [optional] 
 **clientId** | **Number**| The client id | [optional] 

### Return type

[**OpenehrListCompositionVersionWrapperList**](OpenehrListCompositionVersionWrapperList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="openehrCompositionWrapperAPICopyVvtCareProfile"></a>
# **openehrCompositionWrapperAPICopyVvtCareProfile**
> OpenehrCompositionWrapper openehrCompositionWrapperAPICopyVvtCareProfile(careplanId, newCareplanId, referenceModelObjectForm)

Copies a VVT care profile compositionWrapper to a new careplan.

This will update the event time of the observation in the composition to the date time this was copied

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.OpenehrCompositionWrapperApi();
let careplanId = 789; // Number | The id of the careplan from which to copy the vvt care profile
let newCareplanId = 789; // Number | The id of the careplan for which to create a vvt care profile
let referenceModelObjectForm = new NedapOnsApi.OpenehrReferenceModelObjectForm(); // OpenehrReferenceModelObjectForm | The requested form of the vvt care profile composition. The options are: * **METADATA**: Return only the metadata. `referenceModelObject` and `pathsAndValues` will be empty. * **PATHS_AND_VALUES**: Return the `pathsAndValues`. `referenceModelObject` will be empty. * **RM_OBJECT**: Return the `referenceModelObject` in the older Nedap specific JSON format. Matches `ArchieJacksonConfiguration.createLegacyConfiguration` in the Archie library. `pathsAndValues` will be empty. * **RM_OBJECT_STANDARDS_COMPLIANT_JSON**: Return the `referenceModelObject` compliant with the openEHR JSON specification. Matches `ArchieJacksonConfiguration.createStandardsCompliant` in the Archie library. `pathsAndValues` will be empty.

apiInstance.openehrCompositionWrapperAPICopyVvtCareProfile(careplanId, newCareplanId, referenceModelObjectForm, (error, data, response) => {
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
 **careplanId** | **Number**| The id of the careplan from which to copy the vvt care profile | 
 **newCareplanId** | **Number**| The id of the careplan for which to create a vvt care profile | 
 **referenceModelObjectForm** | [**OpenehrReferenceModelObjectForm**](.md)| The requested form of the vvt care profile composition. The options are: * **METADATA**: Return only the metadata. &#x60;referenceModelObject&#x60; and &#x60;pathsAndValues&#x60; will be empty. * **PATHS_AND_VALUES**: Return the &#x60;pathsAndValues&#x60;. &#x60;referenceModelObject&#x60; will be empty. * **RM_OBJECT**: Return the &#x60;referenceModelObject&#x60; in the older Nedap specific JSON format. Matches &#x60;ArchieJacksonConfiguration.createLegacyConfiguration&#x60; in the Archie library. &#x60;pathsAndValues&#x60; will be empty. * **RM_OBJECT_STANDARDS_COMPLIANT_JSON**: Return the &#x60;referenceModelObject&#x60; compliant with the openEHR JSON specification. Matches &#x60;ArchieJacksonConfiguration.createStandardsCompliant&#x60; in the Archie library. &#x60;pathsAndValues&#x60; will be empty. | 

### Return type

[**OpenehrCompositionWrapper**](OpenehrCompositionWrapper.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="openehrCompositionWrapperAPICreateV2"></a>
# **openehrCompositionWrapperAPICreateV2**
> OpenehrCompositionWrapper openehrCompositionWrapperAPICreateV2(body, opts)

Create CompositionWrapper

Composition data can be provided by means of either paths and values or ReferenceModelObject. A provided ReferenceModelObject will be deserialized using the standard-compliant Jackson deserializer.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.OpenehrCompositionWrapperApi();
let body = new NedapOnsApi.OpenehrCompositionWrapper(); // OpenehrCompositionWrapper | CompositionWrapper to create
let opts = { 
  'referenceModelObjectForm': new NedapOnsApi.OpenehrReferenceModelObjectForm() // OpenehrReferenceModelObjectForm | The requested form of the composition. The default value is PATHS_AND_VALUES. The options are: * **METADATA**: Return only the metadata. `referenceModelObject` and `pathsAndValues` will be empty. * **PATHS_AND_VALUES**: Return the `pathsAndValues`. `referenceModelObject` will be empty. * **RM_OBJECT**: Return the `referenceModelObject` in the older Nedap specific JSON format. Matches `ArchieJacksonConfiguration.createLegacyConfiguration` in the Archie library. `pathsAndValues` will be empty. * **RM_OBJECT_STANDARDS_COMPLIANT_JSON**: Return the `referenceModelObject` compliant with the openEHR JSON specification. Matches `ArchieJacksonConfiguration.createStandardsCompliant` in the Archie library. `pathsAndValues` will be empty.
};
apiInstance.openehrCompositionWrapperAPICreateV2(body, opts, (error, data, response) => {
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
 **body** | [**OpenehrCompositionWrapper**](OpenehrCompositionWrapper.md)| CompositionWrapper to create | 
 **referenceModelObjectForm** | [**OpenehrReferenceModelObjectForm**](.md)| The requested form of the composition. The default value is PATHS_AND_VALUES. The options are: * **METADATA**: Return only the metadata. &#x60;referenceModelObject&#x60; and &#x60;pathsAndValues&#x60; will be empty. * **PATHS_AND_VALUES**: Return the &#x60;pathsAndValues&#x60;. &#x60;referenceModelObject&#x60; will be empty. * **RM_OBJECT**: Return the &#x60;referenceModelObject&#x60; in the older Nedap specific JSON format. Matches &#x60;ArchieJacksonConfiguration.createLegacyConfiguration&#x60; in the Archie library. &#x60;pathsAndValues&#x60; will be empty. * **RM_OBJECT_STANDARDS_COMPLIANT_JSON**: Return the &#x60;referenceModelObject&#x60; compliant with the openEHR JSON specification. Matches &#x60;ArchieJacksonConfiguration.createStandardsCompliant&#x60; in the Archie library. &#x60;pathsAndValues&#x60; will be empty. | [optional] 

### Return type

[**OpenehrCompositionWrapper**](OpenehrCompositionWrapper.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="openehrCompositionWrapperAPIDelete"></a>
# **openehrCompositionWrapperAPIDelete**
> OpenehrCompositionWrapper openehrCompositionWrapperAPIDelete(id)

Deletes the CompositionWrapper with given id

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.OpenehrCompositionWrapperApi();
let id = 789; // Number | The id of the composition

apiInstance.openehrCompositionWrapperAPIDelete(id, (error, data, response) => {
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
 **id** | **Number**| The id of the composition | 

### Return type

[**OpenehrCompositionWrapper**](OpenehrCompositionWrapper.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="openehrCompositionWrapperAPIDeleteMultiple"></a>
# **openehrCompositionWrapperAPIDeleteMultiple**
> openehrCompositionWrapperAPIDeleteMultiple(id)

Deletes multiple Compositions by given id&#x27;s

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.OpenehrCompositionWrapperApi();
let id = [3.4]; // [Number] | A list with Identifiers of CompositionWrappers to delete

apiInstance.openehrCompositionWrapperAPIDeleteMultiple(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**[Number]**](Number.md)| A list with Identifiers of CompositionWrappers to delete | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="openehrCompositionWrapperAPIEvaluate"></a>
# **openehrCompositionWrapperAPIEvaluate**
> OpenehrRuleEvaluationResult openehrCompositionWrapperAPIEvaluate(body, opts)

Posts a compositionWrapper and returns the ruleEvaluation.

Composition data can be provided by means of either paths and values or ReferenceModelObject. A provided ReferenceModelObject will be deserialized using the standard-compliant Jackson deserializer.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.OpenehrCompositionWrapperApi();
let body = new NedapOnsApi.OpenehrCompositionWrapper(); // OpenehrCompositionWrapper | The posted CompositionWrapper, containing the structure of the paths and values.
let opts = { 
  'saveTemporaryComposition': true // Boolean | When true, this will save the provided composition as temporary composition.
};
apiInstance.openehrCompositionWrapperAPIEvaluate(body, opts, (error, data, response) => {
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
 **body** | [**OpenehrCompositionWrapper**](OpenehrCompositionWrapper.md)| The posted CompositionWrapper, containing the structure of the paths and values. | 
 **saveTemporaryComposition** | **Boolean**| When true, this will save the provided composition as temporary composition. | [optional] 

### Return type

[**OpenehrRuleEvaluationResult**](OpenehrRuleEvaluationResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="openehrCompositionWrapperAPIExportToXLSX"></a>
# **openehrCompositionWrapperAPIExportToXLSX**
> &#x27;Blob&#x27; openehrCompositionWrapperAPIExportToXLSX(clientId)

Returns an XLSX file with the content of all compositions within a clients ehr as stream of bytes

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.OpenehrCompositionWrapperApi();
let clientId = 789; // Number | client id

apiInstance.openehrCompositionWrapperAPIExportToXLSX(clientId, (error, data, response) => {
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
 **clientId** | **Number**| client id | 

### Return type

**&#x27;Blob&#x27;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet

<a name="openehrCompositionWrapperAPIIncomingLinks"></a>
# **openehrCompositionWrapperAPIIncomingLinks**
> OpenehrListLinkedReferenceModelObjectWrapperList openehrCompositionWrapperAPIIncomingLinks(id, referenceModelObjectForm, opts)

Finds all reference model objects linking to given composition that are an instance of the given archetypeIds.

This API supports pagination by using limit, and by default will only return the 20 most recent results.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.OpenehrCompositionWrapperApi();
let id = 789; // Number | The id of the composition
let referenceModelObjectForm = new NedapOnsApi.OpenehrReferenceModelObjectForm(); // OpenehrReferenceModelObjectForm | The requested form of the reference model object. The options are: * **METADATA**: Return only the metadata. `referenceModelObject` and `pathsAndValues` will be empty. * **PATHS_AND_VALUES**: Return the `pathsAndValues`. `referenceModelObject` will be empty. * **RM_OBJECT**: Return the `referenceModelObject` in the older Nedap specific JSON format. Matches `ArchieJacksonConfiguration.createLegacyConfiguration` in the Archie library. `pathsAndValues` will be empty. * **RM_OBJECT_STANDARDS_COMPLIANT_JSON**: Return the `referenceModelObject` compliant with the openEHR JSON specification. Matches `ArchieJacksonConfiguration.createStandardsCompliant` in the Archie library. `pathsAndValues` will be empty.
let opts = { 
  'archetypeId': ["archetypeId_example"], // [String] | List of archetype Ids that the requested compositions should be an instance of
  'limit': 56, // Number | Limits the number of results returned
  'offset': 56, // Number | Offsets the number of records of the first result.
  'validFrom': new Date("2013-10-20"), // Date | Starting time
  'validTo': new Date("2013-10-20"), // Date | End time
  'moduleUuid': ["moduleUuid_example"], // [String] | UUID's of modules that the archetypes of the requested compositions should belong to
  'lifecycleState': ["lifecycleState_example"] // [String] | List of lifecycle states that the incoming links should be in, should be called in style: ?lifecycle_state=ABANDONED&lifecycle_state=INACTIVE
};
apiInstance.openehrCompositionWrapperAPIIncomingLinks(id, referenceModelObjectForm, opts, (error, data, response) => {
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
 **id** | **Number**| The id of the composition | 
 **referenceModelObjectForm** | [**OpenehrReferenceModelObjectForm**](.md)| The requested form of the reference model object. The options are: * **METADATA**: Return only the metadata. &#x60;referenceModelObject&#x60; and &#x60;pathsAndValues&#x60; will be empty. * **PATHS_AND_VALUES**: Return the &#x60;pathsAndValues&#x60;. &#x60;referenceModelObject&#x60; will be empty. * **RM_OBJECT**: Return the &#x60;referenceModelObject&#x60; in the older Nedap specific JSON format. Matches &#x60;ArchieJacksonConfiguration.createLegacyConfiguration&#x60; in the Archie library. &#x60;pathsAndValues&#x60; will be empty. * **RM_OBJECT_STANDARDS_COMPLIANT_JSON**: Return the &#x60;referenceModelObject&#x60; compliant with the openEHR JSON specification. Matches &#x60;ArchieJacksonConfiguration.createStandardsCompliant&#x60; in the Archie library. &#x60;pathsAndValues&#x60; will be empty. | 
 **archetypeId** | [**[String]**](String.md)| List of archetype Ids that the requested compositions should be an instance of | [optional] 
 **limit** | **Number**| Limits the number of results returned | [optional] 
 **offset** | **Number**| Offsets the number of records of the first result. | [optional] 
 **validFrom** | **Date**| Starting time | [optional] 
 **validTo** | **Date**| End time | [optional] 
 **moduleUuid** | [**[String]**](String.md)| UUID&#x27;s of modules that the archetypes of the requested compositions should belong to | [optional] 
 **lifecycleState** | [**[String]**](String.md)| List of lifecycle states that the incoming links should be in, should be called in style: ?lifecycle_state&#x3D;ABANDONED&amp;lifecycle_state&#x3D;INACTIVE | [optional] 

### Return type

[**OpenehrListLinkedReferenceModelObjectWrapperList**](OpenehrListLinkedReferenceModelObjectWrapperList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="openehrCompositionWrapperAPISelectedValues"></a>
# **openehrCompositionWrapperAPISelectedValues**
> OpenehrListCompositionValuesForArchetypeList openehrCompositionWrapperAPISelectedValues(body, clientId, referenceModelObjectForm, opts)

Query composition data by archetype and path

Queries values from compositions based on the requested archetypes and paths, optionally limited by a start and/or end date/time. Returns values for the requested paths from compositions that match the requested archetype ids or specializations thereof. The result is ordered by first event time descending.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.OpenehrCompositionWrapperApi();
let body = new NedapOnsApi.OpenehrListArchetypeSelectionList(); // OpenehrListArchetypeSelectionList | 
let clientId = 789; // Number | The id of the client in Ons Administratie for which the data is requested
let referenceModelObjectForm = new NedapOnsApi.OpenehrReferenceModelObjectForm(); // OpenehrReferenceModelObjectForm | The requested form of the compositions. The options are: * **METADATA**: Return only the metadata. `referenceModelObject` and `pathsAndValues` will be empty. * **PATHS_AND_VALUES**: Return the `pathsAndValues`. `referenceModelObject` will be empty. * **RM_OBJECT**: Return the `referenceModelObject` in the older Nedap specific JSON format. Matches `ArchieJacksonConfiguration.createLegacyConfiguration` in the Archie library. `pathsAndValues` will be empty. * **RM_OBJECT_STANDARDS_COMPLIANT_JSON**: Return the `referenceModelObject` compliant with the openEHR JSON specification. Matches `ArchieJacksonConfiguration.createStandardsCompliant` in the Archie library. `pathsAndValues` will be empty.
let opts = { 
  'withAuthorizedEmployeeGroups': false, // Boolean | Set this to true if the response should also include the employee groups who are allowed to read or update the composition
  'withItemTags': false, // Boolean | Set this to true if the response should also include the item tags connected to the composition
  'lifecycleState': ["lifecycleState_example"] // [String] | List of lifecycle states that the compositions should be in, should be called in style: ?lifecycle_state=ABANDONED&lifecycle_state=INACTIVE
};
apiInstance.openehrCompositionWrapperAPISelectedValues(body, clientId, referenceModelObjectForm, opts, (error, data, response) => {
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
 **body** | [**OpenehrListArchetypeSelectionList**](OpenehrListArchetypeSelectionList.md)|  | 
 **clientId** | **Number**| The id of the client in Ons Administratie for which the data is requested | 
 **referenceModelObjectForm** | [**OpenehrReferenceModelObjectForm**](.md)| The requested form of the compositions. The options are: * **METADATA**: Return only the metadata. &#x60;referenceModelObject&#x60; and &#x60;pathsAndValues&#x60; will be empty. * **PATHS_AND_VALUES**: Return the &#x60;pathsAndValues&#x60;. &#x60;referenceModelObject&#x60; will be empty. * **RM_OBJECT**: Return the &#x60;referenceModelObject&#x60; in the older Nedap specific JSON format. Matches &#x60;ArchieJacksonConfiguration.createLegacyConfiguration&#x60; in the Archie library. &#x60;pathsAndValues&#x60; will be empty. * **RM_OBJECT_STANDARDS_COMPLIANT_JSON**: Return the &#x60;referenceModelObject&#x60; compliant with the openEHR JSON specification. Matches &#x60;ArchieJacksonConfiguration.createStandardsCompliant&#x60; in the Archie library. &#x60;pathsAndValues&#x60; will be empty. | 
 **withAuthorizedEmployeeGroups** | **Boolean**| Set this to true if the response should also include the employee groups who are allowed to read or update the composition | [optional] [default to false]
 **withItemTags** | **Boolean**| Set this to true if the response should also include the item tags connected to the composition | [optional] [default to false]
 **lifecycleState** | [**[String]**](String.md)| List of lifecycle states that the compositions should be in, should be called in style: ?lifecycle_state&#x3D;ABANDONED&amp;lifecycle_state&#x3D;INACTIVE | [optional] 

### Return type

[**OpenehrListCompositionValuesForArchetypeList**](OpenehrListCompositionValuesForArchetypeList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="openehrCompositionWrapperAPIUpdateV2"></a>
# **openehrCompositionWrapperAPIUpdateV2**
> OpenehrCompositionWrapper openehrCompositionWrapperAPIUpdateV2(body, id, opts)

Updates the given CompositionWrapper

Updated composition data can be provided by means of either paths and values or ReferenceModelObject. A provided ReferenceModelObject will be deserialized using the standard-compliant Jackson deserializer.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.OpenehrCompositionWrapperApi();
let body = new NedapOnsApi.OpenehrCompositionWrapper(); // OpenehrCompositionWrapper | CompositionWrapper to update
let id = 789; // Number | The id of the composition
let opts = { 
  'referenceModelObjectForm': new NedapOnsApi.OpenehrReferenceModelObjectForm() // OpenehrReferenceModelObjectForm | The requested form of the composition. The default value is PATHS_AND_VALUES. The options are: * **METADATA**: Return only the metadata. `referenceModelObject` and `pathsAndValues` will be empty. * **PATHS_AND_VALUES**: Return the `pathsAndValues`. `referenceModelObject` will be empty. * **RM_OBJECT**: Return the `referenceModelObject` in the older Nedap specific JSON format. Matches `ArchieJacksonConfiguration.createLegacyConfiguration` in the Archie library. `pathsAndValues` will be empty. * **RM_OBJECT_STANDARDS_COMPLIANT_JSON**: Return the `referenceModelObject` compliant with the openEHR JSON specification. Matches `ArchieJacksonConfiguration.createStandardsCompliant` in the Archie library. `pathsAndValues` will be empty.
};
apiInstance.openehrCompositionWrapperAPIUpdateV2(body, id, opts, (error, data, response) => {
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
 **body** | [**OpenehrCompositionWrapper**](OpenehrCompositionWrapper.md)| CompositionWrapper to update | 
 **id** | **Number**| The id of the composition | 
 **referenceModelObjectForm** | [**OpenehrReferenceModelObjectForm**](.md)| The requested form of the composition. The default value is PATHS_AND_VALUES. The options are: * **METADATA**: Return only the metadata. &#x60;referenceModelObject&#x60; and &#x60;pathsAndValues&#x60; will be empty. * **PATHS_AND_VALUES**: Return the &#x60;pathsAndValues&#x60;. &#x60;referenceModelObject&#x60; will be empty. * **RM_OBJECT**: Return the &#x60;referenceModelObject&#x60; in the older Nedap specific JSON format. Matches &#x60;ArchieJacksonConfiguration.createLegacyConfiguration&#x60; in the Archie library. &#x60;pathsAndValues&#x60; will be empty. * **RM_OBJECT_STANDARDS_COMPLIANT_JSON**: Return the &#x60;referenceModelObject&#x60; compliant with the openEHR JSON specification. Matches &#x60;ArchieJacksonConfiguration.createStandardsCompliant&#x60; in the Archie library. &#x60;pathsAndValues&#x60; will be empty. | [optional] 

### Return type

[**OpenehrCompositionWrapper**](OpenehrCompositionWrapper.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

