# NedapOnsApi.DbcGgzActiviteit

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**groepcode** | **String** | Grouping of activity | [optional] 
**element** | **String** | Element in group | [optional] 
**aanspraakType** | **String** | Possible values: NIET_VERZEKERD(\&quot;A\&quot;) VERZEKERD(\&quot;B\&quot;) VERZEKERD_INDIEN_DIAGNOSE_ZONDER_AANSPRAAKBEPERKING(\&quot;C\&quot;) VERZEKERD_INDIEN_DIAGNOSE_ZONDER_AANSPRAAKBEPERKING_MET_AFHANKELIJKHEDEN(\&quot;D\&quot;) NIET_VERZEKERD_TENZIJ(\&quot;E\&quot;) | [optional] 
**hierarchieniveau** | **Number** | Nesting level | [optional] 
**selecteerbaar** | **String** | NIET_SELECTEERBAAR(0) SELECTEERBAAR_DIEPSTE_NIVEAU(1) SELECTEERBAAR_DIEPER_NIVEAU_MOGELIJK(2) | [optional] 
**sorteervolgorde** | **Number** | The order the activities need to be sorted | [optional] 
**soort** | **String** | Possible values: Tijdschrijven Verblijfsdag Dagbesteding Verrichting | [optional] 
**magDirect** | **Boolean** | May there be direct time declared for this activity | [optional] 
**magIndirect** | **Boolean** | May there be indirect time declared for this activity | [optional] 
**magReistijd** | **Boolean** | May there be travel time declared for this activity | [optional] 
**magGroep** | **Boolean** | May this activity be performed by a group. | [optional] 
**brancheIndicatie** | **String** | Possible values: BEIDE(0) GGZ(1) FZ(2) | [optional] 
