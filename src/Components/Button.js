import React, { useState } from 'react';
import { Button } from 'react-native-paper';
import { Text, ScrollView, StyleSheet } from 'react-native';

function ButtonComponent({ handleChange, countryCode }) {
    const [defaultselected, setDefaultSelected] = useState(true)
    const [selectedB, setSelectedB] = useState(false)
    const [selectedE, setSelectedE] = useState(false)
    const [selectedH, setSelectedH] = useState(false)
    const [selectedsc, setSelectedsc] = useState(false)
    const [selectedsp, setSelectedsp] = useState(false)
    const [selectedT, setSelectedT] = useState(false)

    const pressedAll = () => {
        handleChange(countryCode,''),
        setDefaultSelected(true),
        setSelectedB(false),
        setSelectedE(false),
        setSelectedH(false),
        setSelectedsc(false),
        setSelectedsp(false),
        setSelectedT(false)
    
        }
    
       const pressedB = () => {
        handleChange(countryCode,'business'),
        setDefaultSelected(false),
        setSelectedB(true),
        setSelectedE(false),
        setSelectedH(false),
        setSelectedsc(false),
        setSelectedsp(false),
        setSelectedT(false)
        }
    
        const pressedE = () => {
        handleChange(countryCode,'entertainment'),
        setDefaultSelected(false),
        setSelectedB(false),
        setSelectedE(true),
        setSelectedH(false),
        setSelectedsc(false),
        setSelectedsp(false),
        setSelectedT(false)
        } 
    
        const pressedH = () => {
        handleChange(countryCode,'health'),
        setDefaultSelected(false),
        setSelectedB(false),
        setSelectedE(false),
        setSelectedH(true),
        setSelectedsc(false),
        setSelectedsp(false),
        setSelectedT(false)
        } 
    
        const pressedsc = () => {
        handleChange(countryCode,'science'),
        setDefaultSelected(false),
        setSelectedB(false),
        setSelectedE(false),
        setSelectedH(false),
        setSelectedsc(true),
        setSelectedsp(false),
        setSelectedT(false)
        } 
        const pressedsp = () => {
        handleChange(countryCode,'sports'),
        setDefaultSelected(false),
        setSelectedB(false),
        setSelectedE(false),
        setSelectedH(false),
        setSelectedsc(false),
        setSelectedsp(true),
        setSelectedT(false)
        }   
        
        const pressedT = () => {
            handleChange(countryCode,'technology'),
            setDefaultSelected(false),
            setSelectedB(false),
            setSelectedE(false),
            setSelectedH(false),
            setSelectedsc(false),
            setSelectedsp(false),
            setSelectedT(true)
            } 

    return (
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
            <Button mode={(defaultselected == true ? 'contained' : 'outlined')} style={styles.chip} color="#b30000" icon="ballot-outline"
                onPress={pressedAll}>
                <Text style={(defaultselected == true ? styles.txts : styles.txt)}>All</Text>
            </Button>

            <Button mode={(selectedB == true ? 'contained' : 'outlined')} style={styles.chip} color="#b30000" icon="alpha-b-circle"
                onPress={pressedB}>
                <Text style={(selectedB == true ? styles.txts : styles.txt)}>Business</Text>
            </Button>

            <Button mode={(selectedE == true ? 'contained' : 'outlined')} style={styles.chip} color="#b30000" icon="alpha-e-circle"
                onPress={pressedE}>
                <Text style={(selectedE == true ? styles.txts : styles.txt)}>Entertainment</Text>
            </Button>

            <Button mode={(selectedH == true ? 'contained' : 'outlined')} style={styles.chip} color="#b30000" icon="stethoscope"
                onPress={pressedH}>
                <Text style={(selectedH == true ? styles.txts : styles.txt)}>Health</Text>
            </Button>

            <Button mode={(selectedsc == true ? 'contained' : 'outlined')} style={styles.chip} color="#b30000" icon="atom"
              onPress={pressedsc}>
                <Text style={(selectedsc == true ? styles.txts : styles.txt)}>Science</Text>
            </Button>
            <Button mode={(selectedsp == true ? 'contained' : 'outlined')} style={styles.chip} color="#b30000" icon="football"
               onPress={pressedsp}>
                <Text style={(selectedsp == true ? styles.txts : styles.txt)}>Sports</Text>
            </Button>

            <Button mode={(selectedT == true ? 'contained' : 'outlined')} style={styles.chip} color="#b30000" icon="information"
              onPress={pressedT}>
                <Text style={(selectedT == true ? styles.txts : styles.txt)}>Technology</Text>
            </Button>
        </ScrollView>
    )
}

export default ButtonComponent;

const styles = StyleSheet.create({
    chip: {
        margin: 5,
        color: '#b30000'
    },
    txts: {
        color: '#fff'
    },
    txt: {
        color: '#b30000'
    }
})