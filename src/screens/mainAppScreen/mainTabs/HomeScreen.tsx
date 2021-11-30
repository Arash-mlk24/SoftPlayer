import React, {useEffect, useRef, useState} from 'react';
import {NativeModules, View} from 'react-native';
import MusicFiles from 'react-native-get-music-files';
import {getTracks, MusicFile} from 'react-native-music-files';
import {check, PERMISSIONS, request, RESULTS} from 'react-native-permissions';
import {IHomeScreen} from '@utils/interfaces';

function HomeScreen(props: IHomeScreen) {
  const [musics, setMusics] = useState();
  const isMounted = useRef(false);
  let accessCheck = false;

  // An effect to fetch the data
  useEffect(() => {
    check(PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE)
      .then(permissionsStatus => {
        if (permissionsStatus === RESULTS.GRANTED) {
          console.log('\n-----  getting  -----\n');
          // MusicFiles.getAll({
          //   blured: true, // works only when 'cover' is set to true
          //   artist: true,
          //   duration: true, //default : true
          //   cover: false, //default : true
          //   genre: true,
          //   title: true,
          //   minimumSongDuration: 10000, // get songs bigger than 10000 miliseconds duration
          //   fields: [
          //     'title',
          //     'albumTitle',
          //     'genre',
          //     'lyrics',
          //     'artwork',
          //     'duration',
          //   ], // for iOs Version
          // })
          //   .then((data: any) => setMusics(data))
          //   .catch((er: any) => console.log(er))
          //   .finally(() => console.log('done!'));
          getTracks({minimumSongDuration: 10})
            .then(tracks => {
              console.log(tracks);
            })
            .catch(er => console.log(er));
        } else {
          request(PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE).then(result => {
            if (result === RESULTS.GRANTED) {
              accessCheck = true;
              console.log('yess');
            }
          });
        }
      })
      .catch(er => {
        console.log('error occurred: ' + er);
      });
  }, [accessCheck]);

  // Do something else with the data
  useEffect(() => {
    console.log('\n-----  console  -----\n');
    if (isMounted.current) {
      // console.log(musics);
    } else {
      isMounted.current = true;
    }
  }, [musics]);

  return <View></View>;
}

export default HomeScreen;
