import React, { useState } from 'react';

function NewTextInput() {
    const [prompt, setPrompt] = useState('Underwater City');
    const [negativePrompt, setNegativePrompt] = useState('ugly');
    const [imageUrl, setImageUrl] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://3659-35-245-117-236.ngrok.io/generate', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'accept': 'application/json' },
                body: `prompt=${prompt}&negative_prompt=${negativePrompt}`,
            });
            const imageBlob = await response.blob();
            setImageUrl(URL.createObjectURL(imageBlob));
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div class="w-full max-w-xl flex">
            <form onSubmit={handleSubmit} class="bg-slate-100 shadow-md rounded-lg px-8 pt-6 pb-8 mb-4">
                <div>
                    <label class="block text-gray-700 text-sm font-bold mb-2 ">
                        Positive Prompt
                    </label>

                    <input
                        type="text"
                        value={prompt}
                        onChange={e => setPrompt(e.target.value)}
                        placeholder="Prompt"
                        class="block text-gray-700 rounded-md p-3 text-md font-bold mb-8"
                    />
                </div>
                <div class="border-slate-500">
                    <label class="block text-gray-700 text-sm font-bold mb-2">
                        Negative Prompt (the opposite of what you want to draw)
                    </label>
                    <input
                        type="text"
                        value={negativePrompt}
                        onChange={e => setNegativePrompt(e.target.value)}
                        placeholder="Negative Prompt"
                        class="block text-gray-700 rounded-md p-3 text-md font-bold mb-8"
                    />
                </div>
                <button type="submit" class="bg-fuchsia-400 hover:bg-fuchsia-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
            </form>
            {imageUrl && <img src={imageUrl} alt="Generated image" />}
        </div>
    );
}

export { NewTextInput };
