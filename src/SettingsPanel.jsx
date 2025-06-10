import React, { useState } from 'react';
import { InformationCircleIcon } from '@heroicons/react/24/outline';

const ToggleSwitch = ({ enabled, onChange }) => {
  return (
    <button
      type="button"
      className={`${
        enabled ? 'bg-blue-600' : 'bg-gray-200'
      } relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}
      role="switch"
      aria-checked={enabled}
      onClick={onChange}
    >
      <span className="sr-only">Toggle option</span>
      <span
        className={`${
          enabled ? 'translate-x-5' : 'translate-x-0'
        } pointer-events-none relative inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out`}
      />
    </button>
  );
};

const InfoIcon = () => {
  return (
    <InformationCircleIcon className="h-5 w-5 text-gray-400 ml-2" aria-hidden="true" />
  );
};

const SettingsPanel = () => {
  const [settings, setSettings] = useState({
    summarize: true,
    reasoning: false,
    flow: false,
    chunking: false,
  });

  const toggleSetting = (setting) => {
    setSettings((prev) => ({
      ...prev,
      [setting]: !prev[setting],
    }));
  };

  const creditDetails = [
    { name: 'KB Creation', credits: 1 },
    { name: 'Summarisation', credits: 4 },
    { name: 'Contextual Chunking', credits: 5 },
  ];

  const totalCredits = creditDetails.reduce((sum, item) => sum + item.credits, 0);

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-sm">
      <div className="space-y-6">
        {/* Toggle Options */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <span className="text-sm font-medium text-gray-900">Summarize this document</span>
              <InfoIcon />
            </div>
            <ToggleSwitch 
              enabled={settings.summarize} 
              onChange={() => toggleSetting('summarize')} 
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <span className="text-sm font-medium text-gray-900">Create Automated Reasoning policy</span>
              <InfoIcon />
            </div>
            <ToggleSwitch 
              enabled={settings.reasoning} 
              onChange={() => toggleSetting('reasoning')} 
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <span className="text-sm font-medium text-gray-900">Improve efficiency using Flow</span>
              <InfoIcon />
            </div>
            <ToggleSwitch 
              enabled={settings.flow} 
              onChange={() => toggleSetting('flow')} 
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <span className="text-sm font-medium text-gray-900">Apply Contextual Chunking</span>
              <InfoIcon />
            </div>
            <ToggleSwitch 
              enabled={settings.chunking} 
              onChange={() => toggleSetting('chunking')} 
            />
          </div>
        </div>

        {/* Credit Usage Section */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-sm font-medium text-gray-900">Credit Usage: {totalCredits} Credits (${(totalCredits * 0.01).toFixed(2)})</h3>
              <p className="text-xs text-gray-500 mt-1">This is an approximate cost. Actual values may depend on the number of chunks.</p>
            </div>
            <div className="flex flex-col items-end">
              <h3 className="text-sm font-medium text-gray-900 mb-2">Credit Usage Details</h3>
              {creditDetails.map((item, index) => (
                <div key={index} className="flex justify-between w-full text-sm">
                  <span className="text-gray-500">{item.name}</span>
                  <span className="ml-6 text-gray-900">{item.credits} {item.credits === 1 ? 'Credit' : 'Credits'}</span>
                </div>
              ))}
              <button className="text-blue-600 text-sm font-medium mt-2">Details</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPanel;

