import { StatusBar } from 'expo-status-bar';
import { FlatList, Image, ScrollView, StyleSheet, Text, View, 
ImageBackground } from 'react-native';

const section_2 = [
    {
        product_name: 'orang',
         uri: 'https://i.pinimg.com/564x/00/b2/64/00b264e712775cf8fc4937b5366f3302.jpg'
},
{
    product_name: 'jalan',
     uri: 'https://images.unsplash.com/photo-1706016869422-49ebd56e223a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
},
{
    product_name: 'cat',
     uri: 'https://i.pinimg.com/564x/07/ca/66/07ca6691b96d9ff94c8cb73b32fc9bca.jpg'
},
{
    product_name: 'lampu',
     uri: 'https://i.pinimg.com/564x/c1/60/fb/c160fbcc30d40b48309be2038b90132c.jpg'
}
]

const section_3 = [
    {
        price: '78000',
        description: 'heho',
        product_name: 'orang',
        uri: 'https://i.pinimg.com/564x/c1/60/fb/c160fbcc30d40b48309be2038b90132c.jpg'
    },
    {
        price: '189000',
        description: 'Only 2 stocks',
        product_name: 'jalan',
        uri: 'https://i.pinimg.com/564x/93/95/84/9395847a93b4f8b1af37905351af2cb8.jpg'
    },
    {
        price: '50000',
        description: 'lol',
        product_name: 'cat',
        uri: 'https://i.pinimg.com/564x/07/ca/66/07ca6691b96d9ff94c8cb73b32fc9bca.jpg'
    },
    {
        price: '100000',
        description: 'o.o',
        product_name: 'lampu',
        uri: 'https://images.unsplash.com/photo-1706016869422-49ebd56e223a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        price: '280000',
        description: 'hehhj',
        product_name: 'lampu',
        uri: 'https://i.pinimg.com/564x/00/b2/64/00b264e712775cf8fc4937b5366f3302.jpg'
    }
]

function Section3() {
    return(
<ImageBackground 
source={{uri:'https://images.unsplash.com/photo-1683009427590-dd987135e66c?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}}
        style={{
            width: '100%',
            marginVertical: 16,
            
        }}>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingHorizontal: 16,
                marginBottom: 16
            }}
                >
            
                <Text 
                style={{
                    fontSize: 18,
                    fontWeight:"600",
                    color: '#A47E7E'
                }}>FLASH SALE</Text>
            <Text style={{
                    fontSize: 15,
                    fontWeight:"600",
                    color: '#A47E7E'
                }}>View All</Text>
            </View>
        <View>
            <FlatList
            data={section_3}
            renderItem={({item,index})=>(
                
            <View key = {index} style={{marginHorizontal:14}}>
                <Image
                source={{uri:item.uri}}
                style={{
                width:100,
                height:100,
                borderRadius: 8
                }}
                resizeMethod='auto'
                resieMode= 'over'
                />
                <View>
                    <Text
                    style={{
                        fontSize: 15,
                    fontWeight:"600",
                    color: '#A47E7E'
                    }}>
                      {item.price}
                        </Text>
                        </View>
                <View style={{
                     fontSize: 15,
                     fontWeight:"600",
                     backgroundColor: '#A47E7E',
                     paddingVertical: 4,
                     borderRadius: 100,
                     alignItems: 'center'
                }}>        
                <Text>
                        {item.description}
                    </Text>
                    </View>
                </View>
            )}
        horizontal = {true}
        showsHorizontalScrollIndicator={false}
            />
        </View>
        </ImageBackground>
    )
}

export default function Homepage() {

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on app!</Text>
      <StatusBar style="auto" />
        <ScrollView>
        <View
        style={{
            backgroundColor: 'green',
            width: '100%',
            height: 280
        }}>
            <Text>Section 1</Text>
        </View>

        <View 
        style={{
            width: '100%',
            marginVertical: 16
        }}>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingHorizontal: 16,
                marginBottom: 16
            }}
                >
            
                <Text 
                style={{
                    fontSize: 18,
                    fontWeight:"600",
                    color: '#A47E7E'
                }}>Review</Text>
            <Text style={{
                    fontSize: 15,
                    fontWeight:"600",
                    color: '#A47E7E'
                }}>View All</Text>
            </View>
        <View>
            <FlatList
            data={section_2}
            renderItem={({item,index})=>(
                
            <View key = {index} style={{marginHorizontal:14}}>
                <Image
                source={{uri:item.uri}}
                style={{
                width:240,
                height:230,
                borderRadius: 8
                }}
                resizeMethod='auto'
                resieMode= 'over'
                />

                </View>
            )}
        horizontal = {true}
        showsHorizontalScrollIndicator={false}
            />
        </View>
        </View>

        {Section3()}

        <View 
        style={{
            backgroundColor: 'yellow',
            width: '100%',
            height: 300
        }}>
            <Text>Section 4</Text>
        </View>
        </ScrollView>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});