import React, {startTransition} from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Balance({saldo, gastos})  {
    return (
        <View style={styles.container}>
            {/* Item de saldo */}
            <View style={styles.item}>
                <Text style={styles.itemTitle}>Saldo</Text>
                <View style={styles.content}>
                    <Text style={styles.currencySymbol}>R$</Text>
                    <Text style={styles.expenses}>{saldo}</Text>
                </View>
            </View>

            {/* Item de gastos */}
            <View style={styles.item}>
                <Text style={styles.itemTitle}>Gastos</Text>
                <View style={styles.content}>
                    <Text style={styles.currencySymbol}>R$</Text>
                    <Text style={styles.balance}>{gastos}</Text>
                </View>
            </View>
        </View>
    )
}

// CSS
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingStart: 18,
        paddingEnd: 18,
        marginTop: -24,
        marginHorizontal: 14,
        borderRadius: 4,
        paddingVertical: 22,
        zIndex: 99,
    },
    itemTitle: {
        fontSize:20,
        color: '#DADADA'
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    currencySymbol: {
        color: '#DADADA',
        marginRight: 6
    },
    expenses: {
        fontSize: 22,
        color: '#2ecc71'
    },
    balance: {
        fontSize: 22,
        color: '#e74c3c'
    }



})