import React from "react";
import { View,StyleSheet,Modal,Image,Text,TouchableOpacity,Animated,ScrollView } from "react-native";
import { Icon, Button } from 'react-native-elements'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CreateProject } from './CreateProjectScreen';
import { ModalContainer } from '../components/ModalContainer';
import Moment  from 'moment';
const Stack = createNativeStackNavigator();

const ModalPoup = ({visible, children}) => {
    const [showModal, setShowModal] = React.useState(visible);
    const scaleValue = React.useRef(new Animated.Value(0)).current;
    React.useEffect(() => {
      toggleModal();
    }, [visible]);
    const toggleModal = () => {
      if (visible) {
        setShowModal(true);
        Animated.spring(scaleValue, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }).start();
      } else {
        setTimeout(() => setShowModal(false), 200);
        Animated.timing(scaleValue, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }).start();
      }
    };
    return (
      <Modal transparent visible={showModal}>
        <View style={styles.modalBackGround}>
          <Animated.View
            style={[styles.modalContainer, {transform: [{scale: scaleValue}]}]}>
            {children}
          </Animated.View>
        </View>
      </Modal>
    );
  };

export default function DetailsScreen({navigation,route}) {

    
  const [visible, setVisible] = React.useState(false);
  const {idProject} = route.params
  const dataOptions = idProject.option_project
  const dataRooms = idProject.room_project
  
  return (
    <>
      <ModalPoup visible={visible}>
        <View style={{alignItems: 'center'}}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => setVisible(false)}>
            <Icon 
                            name="close"
                            type="MaterialIcons"
                            size={24}
                            color="#4B4B4B"
                        />
            {/* <Image
                source={require('../IMG/x.png')}
                style={{height: 30, width: 30}}
              /> */}
            </TouchableOpacity>
          </View>
        </View>
        <ModalContainer idProject={idProject.id}/>
        
      </ModalPoup>  
      <Image style={styles.imgAmbiance} source={require ('../IMG/imgAppart.jpg')}/>
      <ScrollView style ={styles.ContainerCard}>
          {/* BOUTON RETOUR */}
        <View style={styles.buttonsHeader}>
            <View style={styles.buttonLeft}>
                <Button 
                    icon={
                        <Icon 
                            name="arrow-back-ios"
                            type="MaterialIcons"
                            size={24}
                            color="#4B4B4B"
                        />
                    }
                    buttonStyle={styles.ButtonBack} title="" onPress={() => navigation.goBack() } 
                />
            </View>
            {/* BOUTON APPOINTMENT */}
            <View style={styles.ButtonsRight}>
                <View style={styles.ButtonRdvDiv}>
                    
                    <Button 
                        icon={<Icon 
                            name="access-time"
                            type="MaterialIcons"
                            size={30}
                            color="white"
                        />
                        
                    }
                    
                    buttonStyle={styles.ButtonRDV} title="" onPress={() => navigation.navigate("Appointment")}>
                        
                    </Button>
                    <Text style={styles.DateRdvButton}>
                        04/04/2022
                    </Text>
                </View>
                {/* BOUTON EDITION */}
                <View>
                    <Button 
                        icon={<Icon 
                            name="create"
                            type="MaterialIcons"
                            size={24}
                            color="#4B4B4B"
                        />
                    }
                    buttonStyle={styles.ButtonUpdate} title="" onPress={() => navigation.navigate("EditProject") } />
                </View>

                {/* BOUTON DELETE */}

                <View>                    
                    <Button 
                        icon={<Icon 
                            name="delete-outline"
                            type="MaterialIcons"
                            size={26}
                            color="#4B4B4B"
                        />
                    }
                    buttonStyle={styles.ButtonDelete} title="" onPress={() => navigation.goBack() } />
                </View>
                
            </View>
        </View>
        
        {/* ENTETE DECRIPTION PROJET */}
        
        <View style={styles.detailInfoProject}>
            <View style={styles.têteDetailProject}>
                <Text style={styles.RefDetailProject} >{idProject.reference}</Text>
                <Text>{Moment(idProject.created_at).format("Do MMM YY") }</Text>
            </View>
            <Text>type : {idProject.type_Project.name}</Text>
            <Text>status : {idProject.id_Statut_project.name}</Text>
            <Text>{idProject.description}</Text>
        </View>
        <View style={styles.ColPersonNote}> 
            
            {/* CTA PAGE PROFIL CONTACT  */}
            <View style={styles.detailContactProject}>
                <View style={styles.nomPrenom}><Text style={styles.prenom} >{idProject.person.firstname} </Text><Text style={styles.nom}>{idProject.person.lastname}</Text></View>
                <Button 
            icon={<Icon 
                name="eye"
                    type="feather"
                    size={24}
                    color="#fff"
                />}
                    buttonStyle={styles.IconContact} 
                    type="clear"
              
                />
            </View>
            <View style={styles.ButtonNotesView}>

            {/* CTA NOTE MODAL */}

            <Button titleStyle={{color:'#F27405',}} buttonStyle={styles.ButtonNotes}  title="NOTES" onPress={() => setVisible(true)}>

            </Button>
            
            </View>
        </View>
        {/* DESCRIPTION PROPERTY */}
        <View style={styles.propertyInfoCta}>
            <View style={styles.propertyInfo}>
                <View style={styles.typePropertyPrice}>
                  <Text style={styles.typePropertyTxt}>Appartement T2</Text><Text>{project.area}m²</Text>
                  <Text style={styles.pricePropertyTxt}>{project.price} €</Text>
                </View>

                
                <Text>{idProject.address.number} {idProject.address.street}</Text>

                <View style={styles.CpCity}>
                  <Text style={styles.CP}>{idProject.address.city.zip_code}</Text>
                  <Text>{idProject.address.city.name}</Text>
                </View>

                <Text style={styles.roomOptionTitle}>Room</Text>

                <View style={styles.listOptionProperty}>
                    
                    {dataRooms.map(room =>
                        <Text>{room.name} {room.area}m² | </Text>
                    )}
                </View>


                <Text style={styles.roomOptionTitle}>Option</Text>

                <View style={styles.listOptionProperty}>
                    
                    {dataOptions.map(option => 
                      <Text>{option.name} | </Text>
                    )}
                </View>
            </View>
            <Button title="VOIR LES IMAGES" buttonStyle={styles.ctaShowImg}></Button>
        </View> 
        
        
        
      </ScrollView>
      </>
    );
  }



const styles = StyleSheet.create ({
    ContainerCard:{
        paddingTop:70,
        padding:20,
    },

//Icon header


    ButtonsRight:{
        flexDirection:'row',
    },


    buttonLeft:{
        flexDirection:'row',
    },

    buttonsHeader:{
        flexDirection:'row',
        justifyContent:"space-between",
    },

    

    

    ButtonBack:{
        backgroundColor:'#fff',
        borderRadius:50,
        width:50,
        height:50,
        paddingLeft:15,
    },

    ButtonDelete:{
        marginLeft:20,
        backgroundColor:'#fff',
        borderRadius:50,
        width:50,
        height:50,

    },

    ButtonUpdate:{
        marginLeft:20,
        backgroundColor:'#fff',
        borderRadius:50,
        width:50,
        height:50,
    },

    ButtonRDV:{
        
        backgroundColor:'#F27405',
        marginRight:5,
        borderRadius:50,
        width:50,
        height:50,
        
    },

    DateRdvButton:{
        
        color:'#4b4b4b',
        fontSize:12,
        paddingRight:10,
        

    },

    ButtonRdvDiv:{
        
        borderColor:'#F27405',
        borderWidth:1,
        alignItems: 'center',
        flexDirection:'row',
        marginLeft:20,
        backgroundColor:'#fff',
        borderRadius:50,

        height:50,
        
    },


  

//styles DetailProject
    
    detailInfoProject:{
        backgroundColor:'white',
        marginTop:20,
        padding:10,
        flexDirection:'column',
        borderRadius:10,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 4,
        },
        minHeight:110,
        shadowOpacity: 1,
        shadowRadius: 20,
        elevation: 5,
    },
    têteDetailProject:{
        flexDirection:'row',
        justifyContent:'space-between',
        
    },

    RefDetailProject:{
        fontWeight:'bold',
    },

    // styles Button client & notes

    detailContactProject:{
        flexDirection:'row',
        marginTop:10,
        padding:10,
        backgroundColor:'#F27405',
        borderRadius:10,
    },



    ButtonNotesView:{
        marginTop:10,
        marginLeft:20,
        flexGrow:4,
    },
    ButtonNotes:{
        height:60,
        backgroundColor:'#fff',
        borderRadius:10,
        borderWidth:1,
        borderColor:'#F27405',
        color:'#F27405',
    },
    ColPersonNote:{
        flexDirection:'row',
        justifyContent:"flex-start",
        height:70,
        
    },
    prenom:{
        fontSize:18,
        color:'#fff',
        fontWeight:'bold',
        
    },
    nom:{
        fontSize:18,
        color:'#fff',
        fontWeight:'bold',
        
    },
    IconContact:{
        position:'relative',
        
    },
    nomPrenom:{
        flexDirection:'row',
        alignItems:'center',
        flexGrow:4,
    },

    // style IMG ambiance

    imgAmbiance:{
        position:'absolute',
        top:-250,
        opacity:0.7,
    },

    // STYLES PROPERTY INFO 

    propertyInfoCta:{
        
        backgroundColor:'#fff',
        borderRadius:10,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 1,
        shadowRadius: 20,
        elevation: 5,
        
        marginTop:10,
    },
    propertyInfo:{
        padding:10,
    },

    typePropertyPrice:{
        flexDirection:'row',
        justifyContent:'space-between',
        
    },
    typePropertyTxt:{
        fontWeight:'bold',
    },
    pricePropertyTxt:{
        fontWeight:'bold',
        fontSize:16,
    },
    CpCity:{
        flexDirection:'row',
        
    },
    CP:{
        marginRight:5,
    },

    // styles CTA IMG

    ctaShowImg:{
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10,
        backgroundColor:'#F27405',
    },


    // styles OPTION / ROOM 

    roomOptionTitle:{
        fontWeight:'bold',
        marginTop:10,
    },
    listOptionProperty:{
        flexDirection:'row',
    },



    // styles MODAL NOTES

    modalBackGround: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
      },
      modalContainer: {
        width: '90%',
        backgroundColor: 'white',
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 10,
        elevation: 20,
      },
      header: {
        width: '100%',
        height: 40,
        alignItems: 'flex-end',
        justifyContent: 'center',
      },
})