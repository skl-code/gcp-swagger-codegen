# NedapOnsApi.OpenehrMultimediaFileApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**openehrMultimediaFileAPIById**](OpenehrMultimediaFileApi.md#openehrMultimediaFileAPIById) | **GET** /v0/openehr_dossier/back_channel/unauthorized/multimedia_files/{id} | Finds a MultimediaFile metadata
[**openehrMultimediaFileAPICreate**](OpenehrMultimediaFileApi.md#openehrMultimediaFileAPICreate) | **POST** /v0/openehr_dossier/back_channel/unauthorized/multimedia_files | Creates a MultimediaFile and associated meta object
[**openehrMultimediaFileAPIDownload**](OpenehrMultimediaFileApi.md#openehrMultimediaFileAPIDownload) | **GET** /v0/openehr_dossier/back_channel/unauthorized/multimedia_files/{id}/download | Returns a stream of bytes representing the file related to this MultimediaFile meta data
[**openehrMultimediaFileAPIThumbnail**](OpenehrMultimediaFileApi.md#openehrMultimediaFileAPIThumbnail) | **GET** /v0/openehr_dossier/back_channel/unauthorized/multimedia_files/{id}/thumbnail | Returns a stream of bytes representing the thumbnail with specified scale related to this MultimediaFile meta data

<a name="openehrMultimediaFileAPIById"></a>
# **openehrMultimediaFileAPIById**
> OpenehrMultimediaFile openehrMultimediaFileAPIById(id)

Finds a MultimediaFile metadata

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.OpenehrMultimediaFileApi();
let id = 789; // Number | The id of the MultimediaFile in Chiron

apiInstance.openehrMultimediaFileAPIById(id, (error, data, response) => {
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
 **id** | **Number**| The id of the MultimediaFile in Chiron | 

### Return type

[**OpenehrMultimediaFile**](OpenehrMultimediaFile.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="openehrMultimediaFileAPICreate"></a>
# **openehrMultimediaFileAPICreate**
> OpenehrMultimediaFile openehrMultimediaFileAPICreate(metadata, attachment)

Creates a MultimediaFile and associated meta object

POST body:  &lt;p&gt;&lt;blockquote&gt;&lt;pre&gt;  POST /uc/openehr/multimedia_files HTTP/1.1  Accept: application/json  Accept-Encoding: gzip, deflate  Connection: keep-alive  Content-Type: multipart/form-data;boundary&#x3D;Boundary_1_1610615050_1558687905265  Content-Length: 554  --Boundary_1_1610615050_1558687905265  Content-Disposition: form-data; name&#x3D;\&quot;metadata\&quot;  Content-Type: application/json   {\&quot;clientId\&quot;:3,\&quot;mediaType\&quot;:\&quot;image/jpeg\&quot;}  --Boundary_1_1610615050_1558687905265  Content-Disposition: form-data; name&#x3D;\&quot;attachment\&quot;; filename&#x3D;\&quot;dude_icon.jpg\&quot;  Content-Type: image/jpeg   [jpeg data, e.g. output of &#x27;cat dude_icon.jpeg | pbcopy&#x27;]  --Boundary_1_1610615050_1558687905265--  &lt;/pre&gt;&lt;/blockquote&gt;&lt;p&gt;  This method is not actually used, but just a decoy to fool openapi2 into  generating the correct doc for create(Long, MultimediaFile, String, InputStream)

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.OpenehrMultimediaFileApi();
let metadata = new NedapOnsApi.OpenehrMultimediaFile(); // OpenehrMultimediaFile | 
let attachment = "attachment_example"; // Blob | 

apiInstance.openehrMultimediaFileAPICreate(metadata, attachment, (error, data, response) => {
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
 **metadata** | [**OpenehrMultimediaFile**](.md)|  | 
 **attachment** | **Blob**|  | 

### Return type

[**OpenehrMultimediaFile**](OpenehrMultimediaFile.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="openehrMultimediaFileAPIDownload"></a>
# **openehrMultimediaFileAPIDownload**
> &#x27;Blob&#x27; openehrMultimediaFileAPIDownload(id)

Returns a stream of bytes representing the file related to this MultimediaFile meta data

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.OpenehrMultimediaFileApi();
let id = 789; // Number | The id of the MultimediaFile in Chiron

apiInstance.openehrMultimediaFileAPIDownload(id, (error, data, response) => {
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
 **id** | **Number**| The id of the MultimediaFile in Chiron | 

### Return type

**&#x27;Blob&#x27;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/pdf, image/jpeg

<a name="openehrMultimediaFileAPIThumbnail"></a>
# **openehrMultimediaFileAPIThumbnail**
> &#x27;Blob&#x27; openehrMultimediaFileAPIThumbnail(id, scale)

Returns a stream of bytes representing the thumbnail with specified scale related to this MultimediaFile meta data

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.OpenehrMultimediaFileApi();
let id = 789; // Number | The id of the MultimediaFile in Chiron
let scale = new NedapOnsApi.OpenehrScale(); // OpenehrScale | The scale of the thumbnail

apiInstance.openehrMultimediaFileAPIThumbnail(id, scale, (error, data, response) => {
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
 **id** | **Number**| The id of the MultimediaFile in Chiron | 
 **scale** | [**OpenehrScale**](.md)| The scale of the thumbnail | 

### Return type

**&#x27;Blob&#x27;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/octet-stream

