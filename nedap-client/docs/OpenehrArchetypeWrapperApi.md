# NedapOnsApi.OpenehrArchetypeWrapperApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**openehrArchetypeWrapperAPIAll**](OpenehrArchetypeWrapperApi.md#openehrArchetypeWrapperAPIAll) | **GET** /v0/openehr_dossier/back_channel/unauthorized/archetype_wrappers | Finds a list of all archetypeWrappers in the requested format, filtering by archetypeId.
[**openehrArchetypeWrapperAPIById**](OpenehrArchetypeWrapperApi.md#openehrArchetypeWrapperAPIById) | **GET** /v0/openehr_dossier/back_channel/unauthorized/archetype_wrappers/{id} | Finds an archetypeWrapper by archetypeId in the requested format
[**openehrArchetypeWrapperAPICreatable**](OpenehrArchetypeWrapperApi.md#openehrArchetypeWrapperAPICreatable) | **GET** /v0/openehr_dossier/back_channel/unauthorized/archetype_wrappers/creatable | Finds a list of archetypeWrappers that are creatable
[**openehrArchetypeWrapperAPICreatableCurrentVersions**](OpenehrArchetypeWrapperApi.md#openehrArchetypeWrapperAPICreatableCurrentVersions) | **GET** /v0/openehr_dossier/back_channel/unauthorized/archetype_wrappers/creatable/current_versions | Finds a list of archetypeWrappers that are the creatable current versions
[**openehrArchetypeWrapperAPIForClient**](OpenehrArchetypeWrapperApi.md#openehrArchetypeWrapperAPIForClient) | **GET** /v0/openehr_dossier/back_channel/unauthorized/archetype_wrappers/for_client/{client_id} | Finds a list of archetypeWrappers for a given client id

<a name="openehrArchetypeWrapperAPIAll"></a>
# **openehrArchetypeWrapperAPIAll**
> OpenehrListArchetypeWrapperList openehrArchetypeWrapperAPIAll(archetypeForm, opts)

Finds a list of all archetypeWrappers in the requested format, filtering by archetypeId.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.OpenehrArchetypeWrapperApi();
let archetypeForm = new NedapOnsApi.OpenehrArchetypeForm(); // OpenehrArchetypeForm | Format of the serialized archetypes. (Requires to be {@link ArchetypeForm#METADATA}.)
let opts = { 
  'archetypeId': "archetypeId_example" // String | Id of the archetype to filter by. May have partial version information e.g. openEHR-EHR-COMPOSITION.barthel.v2
};
apiInstance.openehrArchetypeWrapperAPIAll(archetypeForm, opts, (error, data, response) => {
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
 **archetypeForm** | [**OpenehrArchetypeForm**](.md)| Format of the serialized archetypes. (Requires to be {@link ArchetypeForm#METADATA}.) | 
 **archetypeId** | **String**| Id of the archetype to filter by. May have partial version information e.g. openEHR-EHR-COMPOSITION.barthel.v2 | [optional] 

### Return type

[**OpenehrListArchetypeWrapperList**](OpenehrListArchetypeWrapperList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="openehrArchetypeWrapperAPIById"></a>
# **openehrArchetypeWrapperAPIById**
> OpenehrArchetypeWrapper openehrArchetypeWrapperAPIById(id, archetypeForm)

Finds an archetypeWrapper by archetypeId in the requested format

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.OpenehrArchetypeWrapperApi();
let id = "id_example"; // String | The id of the archetype, f.e. openEHR-EHR-COMPOSITION.barthel.v2.0.0
let archetypeForm = new NedapOnsApi.OpenehrArchetypeForm(); // OpenehrArchetypeForm | Format of the serialized archetype. (Use {@link ArchetypeForm#METADATA} to avoid fetching large JSON blobs.)

apiInstance.openehrArchetypeWrapperAPIById(id, archetypeForm, (error, data, response) => {
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
 **id** | **String**| The id of the archetype, f.e. openEHR-EHR-COMPOSITION.barthel.v2.0.0 | 
 **archetypeForm** | [**OpenehrArchetypeForm**](.md)| Format of the serialized archetype. (Use {@link ArchetypeForm#METADATA} to avoid fetching large JSON blobs.) | 

### Return type

[**OpenehrArchetypeWrapper**](OpenehrArchetypeWrapper.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="openehrArchetypeWrapperAPICreatable"></a>
# **openehrArchetypeWrapperAPICreatable**
> OpenehrListArchetypeWrapperList openehrArchetypeWrapperAPICreatable(archetypeForm, opts)

Finds a list of archetypeWrappers that are creatable

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.OpenehrArchetypeWrapperApi();
let archetypeForm = new NedapOnsApi.OpenehrArchetypeForm(); // OpenehrArchetypeForm | Format of the serialized archetypes. (Requires to be {@link ArchetypeForm#METADATA}.)
let opts = { 
  'moduleUuid': ["moduleUuid_example"] // [String] | Module UUID(s) of the requested archetypes. When provided, only metadata of archetypes assigned to the module are returned.
};
apiInstance.openehrArchetypeWrapperAPICreatable(archetypeForm, opts, (error, data, response) => {
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
 **archetypeForm** | [**OpenehrArchetypeForm**](.md)| Format of the serialized archetypes. (Requires to be {@link ArchetypeForm#METADATA}.) | 
 **moduleUuid** | [**[String]**](String.md)| Module UUID(s) of the requested archetypes. When provided, only metadata of archetypes assigned to the module are returned. | [optional] 

### Return type

[**OpenehrListArchetypeWrapperList**](OpenehrListArchetypeWrapperList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="openehrArchetypeWrapperAPICreatableCurrentVersions"></a>
# **openehrArchetypeWrapperAPICreatableCurrentVersions**
> OpenehrListArchetypeWrapperList openehrArchetypeWrapperAPICreatableCurrentVersions(archetypeForm, opts)

Finds a list of archetypeWrappers that are the creatable current versions

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.OpenehrArchetypeWrapperApi();
let archetypeForm = new NedapOnsApi.OpenehrArchetypeForm(); // OpenehrArchetypeForm | Format of the serialized archetypes. (Requires to be {@link ArchetypeForm#METADATA}.)
let opts = { 
  'moduleUuid': ["moduleUuid_example"] // [String] | Module UUID(s) of the requested archetypes. When provided, only metadata of archetypes assigned to the module are returned.
};
apiInstance.openehrArchetypeWrapperAPICreatableCurrentVersions(archetypeForm, opts, (error, data, response) => {
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
 **archetypeForm** | [**OpenehrArchetypeForm**](.md)| Format of the serialized archetypes. (Requires to be {@link ArchetypeForm#METADATA}.) | 
 **moduleUuid** | [**[String]**](String.md)| Module UUID(s) of the requested archetypes. When provided, only metadata of archetypes assigned to the module are returned. | [optional] 

### Return type

[**OpenehrListArchetypeWrapperList**](OpenehrListArchetypeWrapperList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="openehrArchetypeWrapperAPIForClient"></a>
# **openehrArchetypeWrapperAPIForClient**
> OpenehrListArchetypeWrapperList openehrArchetypeWrapperAPIForClient(clientId, archetypeForm, opts)

Finds a list of archetypeWrappers for a given client id

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.OpenehrArchetypeWrapperApi();
let clientId = 789; // Number | id of the client
let archetypeForm = new NedapOnsApi.OpenehrArchetypeForm(); // OpenehrArchetypeForm | Format of the serialized archetypes. (Requires to be {@link ArchetypeForm#METADATA}.)
let opts = { 
  'moduleUuid': ["moduleUuid_example"] // [String] | UUID's of modules that the requested archetypes should belong to
};
apiInstance.openehrArchetypeWrapperAPIForClient(clientId, archetypeForm, opts, (error, data, response) => {
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
 **clientId** | **Number**| id of the client | 
 **archetypeForm** | [**OpenehrArchetypeForm**](.md)| Format of the serialized archetypes. (Requires to be {@link ArchetypeForm#METADATA}.) | 
 **moduleUuid** | [**[String]**](String.md)| UUID&#x27;s of modules that the requested archetypes should belong to | [optional] 

### Return type

[**OpenehrListArchetypeWrapperList**](OpenehrListArchetypeWrapperList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

