import { useCallback } from 'react';
import { mount } from './3d';
import './index.css';

export default function Cube() {
	const containerRef = useCallback(mount, []);
	return <div className="Cube-container" ref={containerRef}></div>
}