import React from 'react'
import { StyleSheet, View } from 'react-native'
import SectionFlex from './SectionFlex'
import FastImage from '@dangttp/react-native-fast-image'
import Section from './Section'
import FeatureText from './FeatureText'
import { useCacheBust } from './useCacheBust'

const GIF_URL =
    'https://cdn-images-1.medium.com/max/1600/1*-CY5bU4OqiJRox7G00sftw.gif'

export const GifExample = () => {
    const { url, bust } = useCacheBust(GIF_URL)
    return (
        <View>
            <Section>
                <FeatureText text="• GIF support." />
            </Section>
            <SectionFlex onPress={bust}>
                <FastImage style={styles.image} source={{ uri: url }} />
            </SectionFlex>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        backgroundColor: '#ddd',
        margin: 20,
        height: 100,
        width: 100,
        flex: 0,
    },
})
