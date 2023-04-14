let initialState ={
    events: [
        {
            eventId: '1',
            event: 'ZXC Lobby',
            host: 'Clown',
            activity: 'Dota',
            time: '15:30',
            address: 'Moscow',
        },
        {
            eventId: '2',
            event: 'Soccer match',
            host: 'Dima',
            activity: 'Soccer',
            time: '18:00',
            address: 'St.Petersburg',
        }
    ]
}

export const activitiesReducer = (state = initialState,action)=>{
    return state;
};
