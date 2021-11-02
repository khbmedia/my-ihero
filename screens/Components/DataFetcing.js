import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native';
import Data from './Data';
function DataFetcing() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        setTimeout(() => {
            axios.get('https://depot25.dev.khb.asia/api/front-brand')
            .then(res => {
                console.log(res.data.success.data)
            })
            .catch(err => {
                console.log(err)
            })
        }, 3000);
    })
    return (
     
        <View>
        </View>
    )
    }

export default DataFetcing
