'use client';

import dynamic from "next/dynamic";
import { Popover } from '@base-ui-components/react/popover';
import styles from './index.module.css';
import { ArrowSvg, BellIcon } from "@/icons/bell";
// Dynamically import HLSPlayer to skip SSR
const HLSPlayer = dynamic(() => import('@/components/HLSPlayer'), {
    ssr: false,
    loading: () => <div>Loading video player...</div>,
});

export default function Home() {
    return (
        <div>
            <HLSPlayer src="http://127.0.0.1:81/hls/stream.m3u8" />
            <Popover.Root>
                <Popover.Trigger className={styles.IconButton}>
                    <BellIcon aria-label="Notifications" className={styles.Icon} />
                </Popover.Trigger>
                <Popover.Portal>
                    <Popover.Positioner sideOffset={8}>
                        <Popover.Popup className={styles.Popup}>
                            <Popover.Arrow className={styles.Arrow}>
                                <ArrowSvg />
                            </Popover.Arrow>
                            <Popover.Title className={styles.Title}>Notifications</Popover.Title>
                            <Popover.Description className={styles.Description}>
                                You are all caught up. Good job!
                            </Popover.Description>
                        </Popover.Popup>
                    </Popover.Positioner>
                </Popover.Portal>
            </Popover.Root>
        </div>
    );
}



